import React, { useState } from "react"

function TextForm(props) {

    const handleUpClick = () => {
        // console.log("Upper was Clicked:" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Coverted to UpperCase!", "Success")
    }

    const handleLoClick = () => {
        // console.log("Upper was Clicked:" + text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Coverted to lowerCase!", "Success")

    }

    const handleClearClick = () => {
        // console.log("Upper was Clicked:" + text);
        let clearText = " ";
        setText(clearText)
        props.showAlert("Clear Text!", "Success")
    }

    const handleOnChange = (event) => {
        console.log("On Change");
        setText(event.target.value)
    }

    const handleCopy = () => {
        // let text = document.getElementById("myBox");
        // text.select();
        navigator.clipboard.writeText(text);
        // document.getSelection().removeAllRanges();
        props.showAlert("Copy Text!", "Success")
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "))
        props.showAlert("Remove Extra Spaces!", "Success")
    }

    const [text, setText] = useState('');
    // text = 'new text' /// Wrong way to change the state
    // setText('new text); /// Correct way to change state
    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h1 className="mb-3">{props.heading}</h1>
                <div className="mb-3">
                    {/* <label For="myBox" className='formLabel'>Example textArea</label> */}
                    <textarea className="form-control" value={text} onChange={handleOnChange} 
                    style={{ backgroundColor: props.mode === 'dark' ? '#13466e' : 'white', color: props.mode === 'dark' ? 'white' : '#042743' }}
                     id="myBox" rows="8"></textarea>
                </div>
                <button disabled={text.length===0} className="btn btn-primary" onClick={handleUpClick}>Convert to UpperCase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1 " onClick={handleLoClick}>Convert to LowerCase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1 " onClick={handleClearClick}>Clear Text</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1 " onClick={handleCopy}>Copy Text</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1 " onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            </div>

            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h2>Your text Summary</h2>
                <p>{text.split(/\S+/).filter((element)=>{return element.length}).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").filter((element)=>{return element.length}).length} Minutes Read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter Something in the textbox above to preview it"}</p>
            </div>

        </>
    )
}

export default TextForm;