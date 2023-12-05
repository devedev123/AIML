import React from "react";
import GoogleMap from "../components/Googlemap";
import Mapicon from "../img/map.png";
import KakaoMap from "../components/KakaoMap";
import HomeMap from "../components/HomeMap";



const Map =()=>{
    return (
        /*<GoogleMap/>*/ 
        <div className="map">
            <div className="container">
                <HomeMap/>
                
                
            </div>
            
        </div>
    )
}

export default Map