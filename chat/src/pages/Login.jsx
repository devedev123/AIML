import React, {useState} from "react";
import Add from "../img/Avatar.png"
import { useNavigate,Link,Navigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
const Login =()=>{
    const [err,setErr] = useState(false)
    const navigate = useNavigate()

    const handleSubmit=async(e)=>{
        e.preventDefault()
        const email=e.target[0].value
        const password=e.target[1].value
        try{
           await signInWithEmailAndPassword(auth, email, password);
           <Navigate to="/"/>;
           navigate("/")
        }catch(err){
            setErr(true)
        }
        
    };

    return(
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo">위치기반 채팅&소모임</span>
                <span className="title">Login</span>
                <form onSubmit={handleSubmit}>
                    <input type="email" placeholder="email"/>
                    <input type="password" placeholder="password"/>
                    <button>Sign in</button>
                    {err && <span>Something went wrong</span>}
                </form>
                <p>You don't have an account?<Link to="/register">Register</Link></p>

            </div>
        </div>
    )
}

export default Login