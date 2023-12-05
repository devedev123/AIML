import React, { useContext } from "react";
import { useNavigate,Link } from "react-router-dom";
import Cam from "../img/cam.png";
import Add from "../img/more.png";
import More from "../img/add.png";
import Mapicon from "../img/map.png";
import Messages from "./Messages";
import Input from "./Input";
import  {ChatContext}  from "../context/ChatContext";
const Chat =()=>{
    const {data}= useContext(ChatContext)
    return (
        <div className="chat">
            <div className="chatInfo">
                <span>{data.user.displayName}</span>
                <div className="chatIcons">
                    <Link to="/chatmap">
                        <img src={Mapicon} alt="" />
                    </Link>
        
                    <img src={Add} alt=""/>
                    <img src={More} alt=""/>
                </div>
            </div>
            <Messages/>
            <Input/>
        </div>
    )
}

export default Chat