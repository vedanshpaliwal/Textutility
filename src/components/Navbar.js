import React ,{useState} from "react";
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";

export default function Navbar(props) {
  const [mode, setMode] = useState('dark');

   const danger = () =>{
     console.log('danger is clicked')
     setMode('danger')
     document.body.style.backgroundColor ="red"
         document.body.style.color ="white"
        //  props.showAlert("Danger Mode has been enabled","success")
        // setInterval(()=>{
        //   document.title = "DANGER MODE ENABLED"
        // },2000);
        // setInterval(()=>{
        //   document.title = "TEXTUTILS"
        // },1500);
   }
   const success = () =>{
    console.log('success is clicked')
    setMode('success')
    document.body.style.backgroundColor ="green"
    document.body.style.color ="white"
    // props.showAlert("Danger Mode has been enabled","success")
  }
  const info = () =>{
    console.log('info is clicked')
    setMode('info')
    document.body.style.backgroundColor ="skyBlue"
    document.body.style.color ="white"
    // props.showAlert("Danger Mode has been enabled","success")
  }
  const primary = () =>{
    console.log('primary is clicked')
    setMode('primary')
    document.body.style.backgroundColor ="#8b8bcd"
    document.body.style.color ="white"
    // props.showAlert("Danger Mode has been enabled","success")
  }
  const theme = (e) =>{
    console.log('handleupchange')
    setMode(e.target.value)
}





  const [modetext, setModetext] = useState("Enable Dark Mode");
  const toggleText = ()=>{
    if(props.mode === "light")
    {
      setModetext("Enable Light Mode")
    }
    else{
     setModetext("Enable Dark Mode")

    }
 }
 
 const [styling, setStyling] = useState(
  {
    marginTop: "1px",
    marginBottom:"1px",
    marginRight:"6px",
    marginLeft:"6px",
    paddingTop:" 9px",
    paddingBottom:" 9px",
    paddingLeft: "10px",
    paddingRight:" 10px",
    
    borderRadius:" 50%"
  })
  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-dark bg-dark`} onChange={theme} >
        <a className={`navbar-brand text-${props.mode==="light" ? "black" : "light"}`} href="#">
         { props.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item active">
        <a class="nav-link" href="#">About</a>
      </li>
          </ul>
          <div className="btn btn-primary" style={styling}   onClick={primary} >
             
</div>
<div className="btn btn-info" onClick={info}  style={styling}>
  
  </div>
  <div className="btn btn-success" onClick={success} style={styling}    >
     
  </div>
  <div className="btn btn-danger" onClick={danger} style={styling}   >
    
  </div>
  <label style={styling}>Select Theme</label>
          {/* <div className={`custom-control custom-switch text-${props.mode==="light" ? "dark" : "light"}`}>
  <input type="checkbox" className="custom-control-input" onClick = {props.toggleMode} id="customSwitch1"/>
  <label className="custom-control-label " htmlFor="customSwitch1" onClick = {toggleText}>{modetext}</label>
</div> */}
          {/* <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form> */}
        </div>
        
      </nav>
    </div>
  );
}
//these are the properties types which are needed to be seted 
Navbar.propTypes = {
    title : PropTypes.string.isRequired,home : PropTypes.string
}
Navbar.defaultProps = {
    title :'Please set title here',
    home : 'Please set home here'
}