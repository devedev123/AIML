import React from "react";
import { useNavigate,Link } from "react-router-dom";
import Mapicon from "../img/map.png";
import chatList from "../components/chatList";
import Navbar from "../components/Navbar";
import Googlemap from "../components/Googlemap";
import Chats from "../components/Chats";
const Main= ()=>{
    return (
        <div className="main" >
            <div className="container">
                <div className="mapicon">
                <Link to="/homemap">
                    <img src={Mapicon} alt="" />
                </Link>
        
                </div>
                <div className="title">
                    <h2>위치기반 채팅&소모임</h2>
                </div>

                <div className="group">
                    <h4>내가 가입중인 소모임</h4>
                    <p>운동</p>
                    <p>취미</p>
                </div>

                <div className="friend">
                    <p>내친구목록</p>
                    <li>jane</li>
                    <li>abc</li>
                    <li>john</li>
                </div>
                <div className="chatlist">
                    <button>
                    <Link to="/chathome">채팅</Link>
                    </button>
                    
                    <Chats/>

                </div>
              
                
                
        
            </div>
            
        </div>
    )
}
export default Main