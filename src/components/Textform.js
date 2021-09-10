import React, { useState } from 'react'


export default function Textform(props) {
    const [text, setText] = useState('');
    const handleClearClick = () => {
        setText('');
    }
    const handleUpClick = () => {
        let newtext = text.toUpperCase();
        setText(newtext);
    }
    const handleCopy = () => {
        var text = document.getElementById("Box")
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
    }
    const handleLowClick = () => {
        let newtext = text.toLowerCase();
        setText(newtext);
    }
    const handleOnchange = (event) => {
        setText(event.target.value);
    }
    return (
        <>
        <h1 className={`text-center text-${props.mode==='light'?'dark':'light'}`}>{props.heading}</h1>
        <div className="container col-8">
            <div className="mb-3">
                <textarea className="form-control" style={{backgroundColor : props.mode==='dark'?'#13466e':'white', color : props.mode==='light'?'black':'white'}} onChange={handleOnchange} value={text} id="Box" rows="5"></textarea>
            </div>
            <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleClearClick}>Clear</button>
            <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to UPPER CASE</button>
            <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleLowClick}>Convert to lower case</button>
            <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleCopy}>Copy Text</button>
        <div className={`container mt-3 text-${props.mode==='light'?'dark':'light'}`}>
            <h1>Text summary</h1>
            <p>{text.split(/\s+/).filter((element)=>{return element.length !== 0}).length} words, {text.length} characters and {0.008 * text.split(" ").filter((element)=>{return element.length !== 0}).length} min reading time</p>
        </div>
        </div>
        </>
    )
}
