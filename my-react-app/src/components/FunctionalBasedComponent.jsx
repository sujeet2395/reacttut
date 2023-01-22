import React from "react";
import PropExample from "../PropExample/PropExample";

const Child=()=>{
    return(
        <p>Child component</p>
    )
}

function FunctionalBasedComponent(){
    const getValueFromChildComponent=(value)=>{
        console.log(value);
    }
    return(
        <div>
            <PropExample getValueFromChildComponent={getValueFromChildComponent}/>
            Functional Based Component example
        </div>
    )
}

export default FunctionalBasedComponent;