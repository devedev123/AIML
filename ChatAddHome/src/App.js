
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
            element={ <Main/>} 
          />
          
          <Route path="chat" element={<Home/>}/>
          <Route path="login" element={<Login/>}/>
          <Route path="map" element={<Map/>}/>
          
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