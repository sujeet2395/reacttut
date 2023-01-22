import React, { useEffect, useState } from 'react'

function UseState(){
    const [count, setCount]=useState(0);
    const [flag, setFlag]=useState(false);
    const handleClick=()=>{
        setCount(count+1)
    }
    useEffect(()=>{
        console.log('effect is called only once on page load');
    },[])//componentDidMount
    useEffect(()=>{
        if(count===5)
        {
            setFlag(true);
        }
    },[count])//componentDidUpdate
    useEffect(()=>{
        return ()=>{
            console.log('unmounted')
        }
    })//componentWillUnmount
    return (<div>
            <button onClick={handleClick}>Click</button>
            Counter value is {count}
            {
                flag && <p>Hello world</p>
            }
    </div>)
}

export default UseState;