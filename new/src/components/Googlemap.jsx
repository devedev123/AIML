import React, { useContext } from "react";
import { GoogleMap, LoadScript, MarkerF } from '@react-google-maps/api';
import Mapicon from "../img/map.png";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { AuthContext } from "../context/AuthContext";
const containerStyle = {
    width: '700px',
    height: '400px'
  };
  
  const center = {
    lat: 14.018000,
    lng: 120.835941
  };
const Googlemap =()=>{
    return (
        <LoadScript
          googleMapsApiKey="AIzaSyBsXJY3xmB4M6Sr8IRnB7h8aOtyFgpCTNw"
        >
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={14}
          >
            
          </GoogleMap>
        </LoadScript>
      )
    
       
    
}

export default React.memo(Googlemap)

