import React, { Component } from 'react'

class FetchRequestApi extends Component{

    state={
        data:[]
    }
    componentDidMount()
    {
        this.getData();
    }

    getData=async()=>{
        const reponse=await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await reponse.json();
        console.log(data);
        this.setState({
            data
        })
    }

    render(){
        console.log(this.state.data)
        return (<div>
                {
                    this.state.data && this.state.data.length>0 ? this.state.data.map((dataItem,index)=><p key={`${dataItem.id}${index}`}>
                        {dataItem.title} and {dataItem.body}
                    </p>) : null
                }
        </div>)
    }
}

export default FetchRequestApi;