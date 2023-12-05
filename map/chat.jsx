import React, { useEffect } from 'react';

const MapComponent = () => {
  useEffect(() => {
    const mapContainer = document.getElementById('map');

    const mapOption = {
      center: new window.kakao.maps.LatLng(33.450701, 126.570667),
      level: 3,
    };

    const map = new window.kakao.maps.Map(mapContainer, mapOption);

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;

        const locPosition = new window.kakao.maps.LatLng(lat, lon);

        const message =
          '<div style="padding:5px;">내 위치 <br><a href="https://map.kakao.com/link/map/locPosition" style="color:blue" target="_blank">검색 및 주변 탐색</a> <a href="https://map.kakao.com/link/to/locPosition" style="color:blue" target="_blank">길찾기</a></div>';

        displayMarker(locPosition, message);
      });
    } else {
      const locPosition = new window.kakao.maps.LatLng(37.552576, 126.924870);
      const message = 'geolocation을 사용할수 없어요..';
      displayMarker(locPosition, message);
    }

    let drawingFlag = false;
    let moveLine;
    let clickLine;
    let distanceOverlay;
    const dots = [];

    const displayMarker = (locPosition, message) => {
      const marker = new window.kakao.maps.Marker({
        map: map,
        position: locPosition,
      });

      const iwPosition = new window.kakao.maps.LatLng(33.450701, 126.570667);

      const iwContent = message;

      const infowindow = new window.kakao.maps.InfoWindow({
        content: iwContent,
        removable: true,
      });

      infowindow.open(map, marker);

      map.setCenter(locPosition);
    };

    const deleteClickLine = () => {
      if (clickLine) {
        clickLine.setMap(null);
        clickLine = null;
      }
    };

    const showDistance = (content, position) => {
      if (distanceOverlay) {
        distanceOverlay.setPosition(position);
        distanceOverlay.setContent(content);
      } else {
        distanceOverlay = new window.kakao.maps.CustomOverlay({
          map: map,
          content: content,
          position: position,
          xAnchor: 0,
          yAnchor: 0,
          zIndex: 3,
        });
      }
    };

    const deleteDistnce = () => {
      if (distanceOverlay) {
        distanceOverlay.setMap(null);
        distanceOverlay = null;
      }
    };

    const displayCircleDot = (position, distance) => {
      const circleOverlay = new window.kakao.maps.CustomOverlay({
        content: '<span class="dot"></span>',
        position: position,
        zIndex: 1,
      });

      circleOverlay.setMap(map);

      if (distance > 0) {
        const distanceOverlay = new window.kakao.maps.CustomOverlay({
          content:
            '<div class="dotOverlay">거리 <span class="number">' +
            distance +
            '</span>m</div>',
          position: position,
          yAnchor: 1,
          zIndex: 2,
        });

        distanceOverlay.setMap(map);
      }

      dots.push({ circle: circleOverlay, distance: distanceOverlay });
    };

    const deleteCircleDot = () => {
      dots.forEach((dot) => {
        if (dot.circle) {
          dot.circle.setMap(null);
        }

        if (dot.distance) {
          dot.distance.setMap(null);
        }
      });

      dots.length = 0;
    };

    const getTimeHTML = (distance) => {
      const walkTime = (distance / 67) | 0;
      let walkHour = '',
        walkMin = '';

      if (walkTime > 60) {
        walkHour = '<span class="number">' + Math.floor(walkTime / 60) + '</span>시간 ';
      }
      walkMin = '<span class="number">' + walkTime % 60 + '</span>분';

      const bycicleTime = (distance / 227) | 0;
      let bycicleHour = '',
        bycicleMin = '';

      if (bycicleTime > 60) {
        bycicleHour = '<span class="number">' + Math.floor(bycicleTime / 60) + '</span>시간 ';
      }
      bycicleMin = '<span class="number">' + bycicleTime % 60 + '</span>분';

      const content = '<ul class="dotOverlay distanceInfo">';
      content += '    <li>';
      content += '        <span class="label">총거리</span><span class="number">' + distance + '</span>m';
      content += '    </li>';
      content += '    <li>';
      content += '        <span class="label">도보</span>' + walkHour + walkMin;
      content += '    </li>';
      content += '    <li>';
      content += '        <span class="label">자전거</span>' + bycicleHour + bycicleMin;
      content += '    </li>';
      content += '</ul>';

      return content;
    };

    kakao.maps.event.addListener(map, 'click', function (mouseEvent) {
      const clickPosition = mouseEvent.latLng;

      if (!drawingFlag) {
        drawingFlag = true;

        deleteClickLine();
        deleteDistnce();
        deleteCircleDot();

        clickLine = new window.kakao.maps.Polyline({
          map: map,
          path: [clickPosition],
          strokeWeight: 3,
          strokeColor: '#db4040',
          strokeOpacity: 1,
          strokeStyle: 'solid',
        });

        moveLine = new window.kakao.maps.Polyline({
          strokeWeight: 3,
          strokeColor: '#db4040',
          strokeOpacity: 0.5,
          strokeStyle: 'solid',
        });

        displayCircleDot(clickPosition, 0);
      } else {
        const path = clickLine.getPath();
        path.push(clickPosition);
        clickLine.setPath(path);

        const distance = Math.round(clickLine.getLength());
        displayCircleDot(clickPosition, distance);
      }
    });

    kakao.maps.event.addListener(map, 'mousemove', function (mouseEvent) {
      if (drawingFlag) {
        const mousePosition = mouseEvent.latLng;
        const path = clickLine.getPath();
        const movepath = [path[path.length - 1], mousePosition];
        moveLine.setPath(movepath);
        moveLine.setMap(map);

        const distance = Math.round(clickLine.getLength() + moveLine.getLength());
        const content =
          '<div class="dotOverlay distanceInfo">총거리 <span class="number">' +
          distance +
          '</span>m</div>';

        showDistance(content, mousePosition);
      }
    });

    kakao.maps.event.addListener(map, 'rightclick', function () {
      if (drawingFlag) {
        moveLine.setMap(null);
        moveLine = null;

        const path = clickLine.getPath();

        if (path.length > 1) {
          if (dots[dots.length - 1].distance) {
            dots[dots.length - 1].distance.setMap(null);
            dots[dots.length - 1].distance = null;
          }

          const distance = Math.round(clickLine.getLength());
          const content = getTimeHTML(distance);

          showDistance(content, path[path.length - 1]);
        } else {
          deleteClickLine();
          deleteCircleDot();
          deleteDistnce();
        }

        drawingFlag = false;
      }
    });

    return () => {
      // Cleanup code or any code to run on component unmount
    };
  }, []);

  return <div id="map" style={{ width: '100%', height: '100vh' }}></div>;
};

export default MapComponent;
