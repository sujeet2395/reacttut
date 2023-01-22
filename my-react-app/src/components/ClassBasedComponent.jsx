import React, { Component } from 'react';

class ClassBasedComponent extends Component{
    state={
        count: 0
    }
    // constructor(props)
    // {
    //     super(props)
    //     this.state={
    //         count: 0 // intial value of count
    //     }
    //     this.handleClick=this.handleClick.bind(this)
    // }
    // handleClick()
    // {

    // }
    handleClick=()=>{
        const {count}=this.state;
        this.setState({
            count: count+1
        }, ()=>{console.log(this.state);})
    }
    render()
    {
        return (
            <div><button onClick={this.handleClick}>Click</button>
                Class Based Component example</div>
        );
    }
};

export default ClassBasedComponent;