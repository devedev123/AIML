import React from "react";
import GoogleMap from "../components/Googlemap";
import Mapicon from "../img/map.png";


const Map =()=>{
    return (
        <div className="map">
            <div className="container">
                <GoogleMap/>
                
            </div>
            
        </div>
    )
}

export default Map