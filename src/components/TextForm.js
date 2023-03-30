import PropTypes from 'prop-types';
import { useState } from 'react';

export default function TextForm({ textLabel, textHeight, darkMode, colors, showAlert }) {
    const [text, setText] = useState("");
    let words = text.trim().length === 0 ? 0 : text.trim().split(" ").length;

    const handleExtraSpaces = () => {
        setText(text.split(/[ ]+/).join(" "));
        showAlert("Extra spaces removed", 'success');
    }
    const handleSpeak = () => {
        let msg = new SpeechSynthesisUtterance(text);
        window.speechSynthesis.speak(msg);
    }

    const handleCopytoClipboard = () => {
        navigator.clipboard.writeText(text).then(() => {
            alert("Text copied");
        }, (err) => {
            alert("Failed to copy: " + err);
        })
    }

    return (
        <>

            <div className='container my-4'>


                <div className='d-flex'>
                    <label htmlFor="mytextform" className="form-label me-auto">{textLabel}</label>
                    <span className='mx-2 '>
                        <b>Words: </b>{words}
                    </span>
                    <span className='mx-2'>
                        <b>Characters: </b>{text.length}
                    </span>

                </div>
                <textarea className="form-control" value={text} onChange={e => (setText(e.target.value))} id="mytextform" rows={textHeight.toString()} style={{ backgroundColor: !darkMode ? colors.light : colors.dark, color: darkMode ? colors.light : colors.dark }}></textarea>
                <button className={`btn btn-outline-${!darkMode ? 'dark' : 'light'} m-2`} onClick={() => {
                    setText(text.toUpperCase());
                    showAlert("Converted Text to Uppercase", 'success');
                }}>Uppercase Text</button>
                <button className={`btn btn-outline-${!darkMode ? 'dark' : 'light'} m-2`} onClick={() => {
                    setText(text.toLowerCase());
                    showAlert("Converted Text to Lowercase", 'success')
                }}>Lowercase Text</button>
                <button className={`btn btn-outline-${!darkMode ? 'dark' : 'light'} m-2`} onClick={handleExtraSpaces}>Remove Extra Spaces</button>
                <button className={`btn btn-outline-${!darkMode ? 'dark' : 'light'} m-2`} onClick={handleCopytoClipboard}>Copy to Clipboard</button>
                <button className={`btn btn-outline-${!darkMode ? 'dark' : 'light'} m-2`} onClick={handleSpeak}>Text to speak</button>
                <button className={`btn btn-outline-${!darkMode ? 'dark' : 'light'} m-2`} onClick={() => { setText("") }}>Clear Text</button>

                <h2>Preview</h2><i>(Reading Time: {"<="} {Math.ceil(words / 15) / 10} mins)</i>
                <p className="border" style={{ backgroundColor: !darkMode ? colors.light : colors.dark, color: darkMode ? colors.light : colors.dark }}>
                    {text.length > 0 ? text : "Enter some text to preview"}</p>

            </div>


        </>
    )
}

TextForm.propTypes = {
    textLabel: PropTypes.string.isRequired,
    textHeight: PropTypes.number.isRequired,
}
TextForm.defaultProps = {
    textLabel: "Enter your label text",
    textHeight: 8
}