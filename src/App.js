import react ,{useState}from "react";
import Signin from "./components/Signin.js";
import Login from "./components/Login.js"
import Deskboard from "./components/Deskboard.js";
import { Route , Routes } from "react-router-dom";




const App = ()=>{
    
    return <div>
         <Routes>
             <Route path="/" element={<Signin/>}/>
             <Route path="/Login" element={<Login/>}/>
             <Route path="/Deskboard" element={<Deskboard/>}/>
         </Routes>
    </div>
}


export default App;