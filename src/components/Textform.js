import React ,{ useState } from "react";

export default function Textform(props) {   //usestate used here is hooks hooks are used tp use class property in the function
    const handleUpclick = () =>{
        console.log('handleupclick')
        let newtext = text.toUpperCase()
        setText(newtext)
    }
    const handleonchange = (e) =>{
        console.log('handleupchange')
        setText(e.target.value)
    }

    const handlecopy = () => {
        console.log("I am happy");
        var text = document.getElementById('myBox');
        text.select();
        text.setSelectionRange(0,9999);
        navigator.clipboard.writeText(text.value);
        
    }

    const [text, setText] = useState("Enter text here");
    return (
        <div>

            <h1 class="my-5">{props.heading}</h1>
            <div class="mb-3">
                <label for="exampleFormControlTextarea1">Enter Your Text Below</label>
                <textarea
                    class="form-control"
                    id="myBox" value={text} onChange={handleonchange}
                    rows="8"></textarea>
                    <button className="btn btn-warning my-1" onClick={handleUpclick}>Convert to UpperCASE</button>
                    <button  className="btn btn-warning my-1 mx-2" onClick ={handlecopy}>Copy Text</button>
            </div>
            <div className = "my-4 container">
              <h1>Your Text Summary</h1>
              <p>{text.split(" ").length - 1} words and {text.length} characters</p>
              <p>{0.008 * text.split(" ").length }Minutes read</p>
              <h3>Preview</h3>
              <p>{text}</p>
            </div>
        </div>
    );
}
