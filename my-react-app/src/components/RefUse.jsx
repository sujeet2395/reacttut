import React, { useEffect, useRef } from "react";

function RefUse(){
    const inputRef=useRef(null);
    useEffect(()=>{
        inputRef.current.focus();
    },[])
    // const handleFocus=()=>{
    //     inputRef.current.focus();
    // }
    return (
        <div>
            <input ref={inputRef}name="name" placeholder="Name" type="text" />
            {/* <button onClick={handleFocus}>Click</button> */}
        </div>
    )
}
export default RefUse;