
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Main from "./pages/Main";
import Map from "./pages/Map";

import "./style.scss"
import "./mainst.scss"

import {BrowserRouter,Routes,Route,Navigate} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import ChatHome from "./pages/ChatHome";
import ChatMap from "./pages/ChatMap";


function App() {
  const {currenUser} = useContext(AuthContext)
  const ProtectedRoute = ({children})=>{
    if(!currenUser){
      return <Navigate to="/login"/>
    }
    return children
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route 
            index 
            element={ <Login/>} 
          />
          
          <Route path="chat" element={<Home/>}/>
          <Route path="login" element={<Login/>}/>
          <Route path="homemap" element={<Map/>}/>
          <Route path="main" element={<Main/>}/> 
          <Route path="chathome" element={<ChatHome/>}/> 
          <Route path="chatmap" element={<ChatMap/>}/> 
          
          <Route path="register" element={<Register/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    
  );
}
////<ProtectedRoute>
            //  <Home/>
            //</ProtectedRoute>
export default App;