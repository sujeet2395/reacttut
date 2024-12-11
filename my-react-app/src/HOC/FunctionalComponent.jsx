import React from "react";
import HOC from './index'

function FunctionalComponent(props){
    console.log(props)
    return (
        <div></div>
    )
}
export default HOC(FunctionalComponent);