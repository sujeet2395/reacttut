import React from "react";

function FunctionalComponent(props){
    console.log(props)
    return (
        <div></div>
    )
}
export default HOC(FunctionalComponent);