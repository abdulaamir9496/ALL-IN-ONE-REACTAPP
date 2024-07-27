import { React, useRef, useState } from 'react'

function UseRefHook() {
    const refElement = useRef("");
    const [name, setName] = useState("Muhammad");

//This function will return a empty feild 
    function Reset() {
        setName("");
        //maintaining the focus in by this DOM manipulation
        refElement.current.focus(); 
    }
//Another function to change color & value of the text in the feild
    function HandleInput() {
        refElement.current.style.color='Blue';
        refElement.current.value="Aamir";
    }

    console.log(refElement);
    return (
        <>
            <div>
                <h1>We are learning about useRef react hook.</h1>
                {/* text in the field also adding ref tag for maintaining focus*/}
                <input ref={refElement} type="text" value={name} onChange={(e) => setName(e.target.value)}></input>
                {/* using reset button to remove the data from the input feild */}
                <button onClick={Reset}>Reset</button>
                {/* adding another button for more clarity */}
                <button onClick={HandleInput}>Handle Input</button>
            </div>
        </>
    );
};

export default UseRefHook

/**
 * useRef react hook:
 * 
 * what is useRef? -DOM manipulation
 * How to use it?
 * 
 * For manupulating the complete DOM whatever functionality we can achieve by using useRef
 */