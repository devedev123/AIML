import React from "react";
import GoogleMap from "../components/Googlemap";
import Mapicon from "../img/map.png";
import KakaoMap from "../components/KakaoMap";
import HomeMap from "../components/HomeMap";



const ChatMap =()=>{
    return (
        /*<GoogleMap/>*/ 
        <div className="map">
            <div className="container">
                <KakaoMap/>
                
            </div>
            
        </div>
    )
}

export default ChatMap