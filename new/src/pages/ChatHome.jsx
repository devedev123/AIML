import React from "react";
import { useNavigate,Link } from "react-router-dom";
import Mapicon from "../img/map.png";
import chatList from "../components/chatList";
import Navbar from "../components/Navbar";
import Googlemap from "../components/Googlemap";
import Chats from "../components/Chats";

const ChatHome= ()=>{
    return (
        <div className="main" >
            <div className="container">
                
                <div style={{justifyContent:"center"}}>
                    <h3 style={{textAlign:"center"}}>채팅방</h3>
                </div>

                <div style={{display:'block',margin:'auto',justifyContent:"center"}} >
                    <input style={{textAlign:"center" ,display:'block'}} type="text" placeholder="채팅방 검색"  />
                </div>

                
                
                <div style={{display:"inline-block",width:'30%'}}>
                    <p>동네 채팅방 조회</p>  
                </div>
                <div style={{display:"inline-block",width:'30%'}} className="chatlist">
                    <h4>내 채팅방</h4>
                    <button>
                    <Link to="/chat">채팅</Link>
                    </button>
                    
                    <Chats/>
                    <button>+채팅방 만들기</button>

                </div>


               
                
                
              
                
                
        
            </div>
            
        </div>
    )
}
export default ChatHome