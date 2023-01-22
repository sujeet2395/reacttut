import React, { Component } from 'react'

class ComponentLifeCycle extends Component{
    state={
        count: 0,
        flag: false
    }
    handleClick=()=>{
        const {count}=this.state;
        this.setState({
            count: count+1
        }, ()=>{console.log(this.state);})
    }
    componentDidMount(){
        console.log('component is mounted.');
    }
    componentDidUpdate(prevProps, prevState)
    {
        console.log(prevState, this.state)
        if(prevState && prevState.count!==this.state.count && this.state.count==10)
        {
            this.setState({
                flag: true
            })
        }
    }
    render()
    {
        return <div><button onClick={this.handleClick}>Click</button>fine
        {
            this.state.count===5 && "count is 5"
        }
        {
            this.state.flag && "flag is true"
        }

        </div>
    }
}

export default ComponentLifeCycle;