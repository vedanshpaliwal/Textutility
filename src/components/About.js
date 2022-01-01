
import React , {useState} from "react";

export default function About() {

  const [myStyle, setmyStyle] = useState(
  {
    color : "black",
    backgroundColor : "white",
  })
  const [btnText, setbtnText] = useState("Enable Dark Mode")
  const ToggleStyle = ()=>{
    if(myStyle.color == "white")
    {
      setmyStyle({
        color : "black",
        backgroundColor : "white"
      })
      setbtnText("Enable Dark Mode")
    }
    else 
    {
      setmyStyle({
        color : "white",
        backgroundColor : "black"
      })
      setbtnText("Enable Light Mode")

    }
  }
  return (
    <div className="container" style={myStyle}>
      <h2 className="my-3">About US</h2>
      <div
        className="accordion container"
        id="accordionExample"
        style={myStyle}
      >
        <div className="card">
          <div className="card-header" id="headingOne"  style = {myStyle}>
            <h2 className="mb-0">
              <button
                className="btn btn-link btn-block text-left"
                type="button"
                data-toggle="collapse"
                data-target="#collapseOne"
                style={myStyle}
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Collapsible Group Item #1
              </button>
            </h2>
          </div>

          <div
            id="collapseOne"
            className="collapse show"
            aria-labelledby="headingOne"
            data-parent="#accordionExample"
            style={myStyle}
          >
            <div className="card-body">
              Some placeholder content for the first accordion panel. This panel
              is shown by default, thanks to the <code>.show</code> class.
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header" id="headingTwo" style={myStyle}>
            <h2 className="mb-0">
              <button
                className="btn btn-link btn-block text-left collapsed"
                type="button"
                data-toggle="collapse"
                data-target="#collapseTwo"
                style={myStyle}
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Collapsible Group Item #2
              </button>
            </h2>
          </div>
          <div
            id="collapseTwo"
            className="collapse"
            aria-labelledby="headingTwo"
            data-parent="#accordionExample"
            style={myStyle}
          >
            <div className="card-body">
              Some placeholder content for the second accordion panel. This
              panel is hidden by default.
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header" id="headingThree" style={myStyle}>
            <h2 className="mb-0">
              <button
                className="btn btn-link btn-block text-left collapsed"
                type="button"
                data-toggle="collapse"
                data-target="#collapseThree"
                aria-expanded="false"
                style={myStyle}
                aria-controls="collapseThree"
              >
                Collapsible Group Item #3
              </button>
            </h2>
          </div>
          <div
            id="collapseThree"
            className="collapse"
            aria-labelledby="headingThree"
            data-parent="#accordionExample"
            style={myStyle}
          >
            <div className="card-body">
              And lastly, the placeholder content for the third and final
              accordion panel. This panel is hidden by default.
            </div>
          </div>
        </div>
      </div>
      <div className="container my-3">
        <button  onClick = {ToggleStyle} className="btn btn-primary">{btnText}</button>
      </div>
    </div>
  );
}
