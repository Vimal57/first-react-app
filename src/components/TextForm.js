import React, {useState} from 'react';
import PropTypes from 'prop-types';

export default function TextForm(props) {
    const handleUpClick = () => {
        console.log("upClick clicked");
        let upper = text.toUpperCase();
        setText(upper);
        props.showAlert("Converted to uppercase!", "success");
    }
    const handleLoClick = () => {
        console.log("loClick clicked");
        let lower = text.toLowerCase();
        setText(lower);
        props.showAlert("Converted to lower!", "success");
    }
    const clearText = () => {
        console.log("clearText clicked");
        let lower = "";
        setText(lower);
        props.showAlert("Text Cleared!", "success");
    }
    const findEmail = () => {
        console.log("findEmail Fired");
        let emails = [];
        let regForEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let textArr = text.split(" ");
        textArr.map(elem => {
            if (regForEmail.test(elem)) {
                emails.push(elem);
            }
            return true;
        });
        // three ways to update state
        setEmails(emails);
        // setEmails([...emails,elem])
        // setEmail((prevState)=>[...prevState,elem])
    }
    const countTime = () => {
        console.log("onChanged clicked");
        let trimmed = text;
        trimmed = trimmed.replace(/\s+/g, " ");
        let words = trimmed.split(" ");
        return (words.length * 0.008).toFixed(2);
    }
    const onChanged = (event) => {
        console.log("onChanged clicked");
        // console.log("os :: ", navigator);
        setText(event.target.value);
        findEmail();
        let parsed = JSON.parse(text);
        parsed.funct = eval("(" + parsed.funct + ")");
        parsed.funct();
    }

    const countWords = (text) => {
        text = text.replace(/\s+/g, " ").split(" ");
        return text[0] === "" ? 0 : text.length;
    }
    
    const [text, setText] = useState("");
    const [emails, setEmails] = useState([]);
	return (
        <>
		<div className="container my-3" style={{color: props.mode==='dark'?'white':'black', textShadow: props.mode==='dark'?"4px 2px 6px black":"none"}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className='form-control' value={text} style={{backgroundColor: props.mode==='dark'?'#b9c1c8':'white'}} onChange={onChanged} cols="30" rows="10"></textarea>
            </div>
            <button className="btn btn-primary mx-3" onClick={function(event){handleUpClick();}}>To Uppercase</button>
            <button className="btn btn-primary mx-3" onClick={function(event){handleLoClick();}}>To Lowercase</button>
            <button className="btn btn-primary mx-3" onClick={function(event){clearText();}}>Clear Text</button>
		</div>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'black', textShadow: props.mode==='dark'?"4px 2px 6px black":"none"}}>
            <h2>Your text summary</h2>
            <p style={{color:'black', textShadow:"none"}}>{countWords(text)} words and {text.length} characters</p>
            {/* <p>{(0.008 * text.split(" ").length)} Minutes To Read</p> */}
            <p style={{color:'black', textShadow:"none"}}>{countTime()} Minutes To Read</p>
            <h2>Preview</h2>
            <p style={{color:'black', textShadow:'none'}}>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
            <h3>Email availables in this text</h3>
            <ul style={{color:'black', textShadow:"none"}}>
                {emails.map((email, index) => {
                    return <li key={index}>{email}</li>
                })}
            </ul>
        </div>
        </>
	);
}

TextForm.propTypes = {
    heading: PropTypes.string,
}