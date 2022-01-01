import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
// import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

function App() {
    
  // const toggleMode = (e)=>{
  //   console.log("toggle mode called")
  //   document.getElementById("primary")
  //   document.getElementById("success")
  //   document.getElementById("danger")
  //   document.getElementById("info")

  //   if(e.id  === "danger")
  //   {
  //     setMode("danger")
  //     console.log("danger clicked")
  //     document.body.style.backgroundColor ="#343a40"
  //     document.body.style.color ="white"
  //     showAlert("Danger Mode has been enabled","success")
  
  //   }
  //   else if(e.id  === "success"){
  //     setMode("success")
  //     document.body.style.backgroundColor = "whitesmoke"
  //     document.body.style.color = "black"
  //     showAlert("Light mode has been enabled","danger")

  //   }
  //   else if(e.id  === "info"){
  //     setMode("info")
      
  //     document.body.style.backgroundColor = "whitesmoke"
  //     document.body.style.color = "black"
  //     showAlert("Light mode has been enabled","danger")

  //   }
  //   else if(e.id  === "primary"){
  //     setMode("primary")
  //     document.body.style.backgroundColor = "whitesmoke"
  //     document.body.style.color = "black"
  //     showAlert("Light mode has been enabled","danger")

  //   }
  // }
  // const themeChange = (e)=>{
  //   console.log("theme change is called")
  //   setMode(e.target.value)
  // }
  const [alert, setAlert] = useState(null)
  const showAlert = (message, type)=>{
    setAlert({
      msg : message,
      type : type
  })
  }
  return (
    <>
   {/* {/* <Router> */}
   <Navbar title = "TextUtils" home = "Home"  />
   <Alert alert={alert}></Alert>
   {/* <Switch> */}
          {/* <Route exact path="/about"> */}
            {/* <About /> */}
          {/* </Route> */} */}
          
          {/* <Route exact path="/"> */}
          <div className = "container my-3">
   <Textform heading = "Passes Heading"/>
   </div>
          {/* </Route>
        </Switch>
   */}

  
   {/* <About></About> */}
   {/* </Router> */}
    </>
  );
}

export default App;
