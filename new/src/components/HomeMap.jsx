import React, { useContext,useEffect } from "react";
import { GoogleMap, LoadScript, MarkerF } from '@react-google-maps/api';
import Mapicon from "../img/map.png";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { AuthContext } from "../context/AuthContext";

const{kakao} =window;

// const HomeMap =()=>{
//     useEffect(()=>{
        
//         const container = document.getElementById('map');
// 		const options = {
// 			center: new kakao.maps.LatLng(37.552576,126.924870),
// 			level: 3
// 		};

//         var map = new kakao.maps.Map(container, options);

//         //////////////////////////////////////////////////////////////////////////////
//         // 지도 마커

//         var markerPosition  = new kakao.maps.LatLng(37.552576,126.924870); 
//         var marker = new kakao.maps.Marker({
//             position: markerPosition
//         });

//         // 마커가 지도 위에 표시되도록 설정합니다
//         marker.setMap(map);
//         var iwContent = '<div style="padding:3px;">내위치</div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
//         iwPosition = new kakao.maps.LatLng(37.552576, 126.924870); //인포윈도우 표시 위치입니다

//         // 인포윈도우를 생성합니다
//         var infowindow = new kakao.maps.InfoWindow({
//         position : iwPosition, 
//         content : iwContent 
//         });

//         infowindow.open(map, marker); 
        
//         ///////////////////////////////////////////////////////////////




//     },[]);
    

//     return (
//         <div id="map" style={{
//             width:'1000px',
//             height:'600px'
//         }}></div>
//     )
       
// }

const HomeMap = () => {
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
  
    return <div id="map" style={{ width: '100%', height: '100vh' }} />;
  };
  
  
export default React.memo(HomeMap)

