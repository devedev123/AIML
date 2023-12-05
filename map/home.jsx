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
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude: lat, longitude: lon } = position.coords;
        const locPosition = new window.kakao.maps.LatLng(lat, lon);
        const message = '<div style="padding:5px;">내 위치</div>';
        displayMarker(locPosition, message, map);
      });
    } else {
      const locPosition = new window.kakao.maps.LatLng(37.552576, 126.924870);
      const message = 'geolocation을 사용할수 없어요..';
      displayMarker(locPosition, message, map);
    }
  }, []);

  function displayMarker(locPosition, message, map) {
    const marker = new window.kakao.maps.Marker({
      map: map,
      position: locPosition,
    });

    const iwContent = message;
    const iwRemoveable = true;

    const infowindow = new window.kakao.maps.InfoWindow({
      content: iwContent,
      removable: iwRemoveable,
    });

    infowindow.open(map, marker);

    map.setCenter(locPosition);
  }

  return <div id="map" style={{ width: '100%', height: '350px' }} />;
};

export default MapComponent;