import react ,{useState}from "react";
import Signin from "./components/Signin.js";
import Login from "./components/Login.js"
import Deskboard from "./components/Deskboard.js";




const App = ()=>{

    const [token , SetToken] = useState();
    return <div>
        <Signin     SetToken={SetToken}/>
        <Login      SetToken={SetToken}/>
        <Deskboard  token   ={token}   />
    </div>
}


export default App;