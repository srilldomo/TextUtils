import React, { useState } from 'react'

export default function Textform(props) {

    //this is handle on change function
    const handleonchange = (event) => {
        // console.log("on change");
        setText(event.target.value)
    }


    //coverted the Uppercase
    const handleupclick = () => {
        // console.log("this is 2 clciked");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("converted the UPPERCASE", "success")
    }
//converted the lowercase
    const handleloclick = () => {
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert(" coverted the lowercase", "success")
    }
//clear the text
    const handleclear = () => {
        let newText = ('')
        setText(newText)
        props.showAlert(" Text cleared", "success")
    }
//copy the text
    const handlcopy = ()=>{
        let text = document.getElementById('MYBOX');
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
       props.showAlert("Text  has been copied successfully", "success")
    }
//remove extra spce
    const handlspace = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extraspace removed successfully", "success")

    }
    //this is States in react
    const [text, setText] = useState("")
    return (
        <>
            <div className='container'style ={{color: props.mode==="dark"? " white":"#042743"}}>
                <h1 className='my-2'>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control my-3" value={text} style ={{backgroundColor: props.mode==="dark"? "black":"white",color: props.mode==="dark"? " white":"#042743" }} id="MYBOX" rows="8" onChange={handleonchange} ></textarea>
                </div>
                <button disabled={text.length===0} className="btn btn-primary my-2 mx-1" onClick={handleupclick}>Converted to UPPERCASE</button>

                <button disabled={text.length===0} className="btn btn-primary my-2 mx-1 " onClick={handleloclick}>Converted to  lowercase</button>

                <button disabled={text.length===0} className="btn btn-primary my-2 mx-1 " onClick={handleclear}>Clear</button>

                <button disabled={text.length===0} className="btn btn-primary my-2 mx-1 " onClick={handlcopy}>Copy</button> 

                <button disabled={text.length===0} className="btn btn-primary my-2 mx-1 " onClick={handlspace}>Remove extra space</button>
            </div>

            <div className="container my-3" style ={{color: props.mode==="dark"? " white":"#042743"  }}>
                <h2>Your Text summary</h2>
                <p>{text.split(/\s+/).filter((element)=>{return element.length !==0}).length}words and {text.length}characters</p>
                <p>{0.008 * text.split(" ").filter((element)=>{return element.length !==0}).length} to read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter something in the textbox to preview it here"} </p>
            </div>

        </>
    )
}
