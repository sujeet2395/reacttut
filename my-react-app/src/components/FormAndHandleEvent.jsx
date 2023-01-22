import React, { Component } from "react";

class FormAndHandleEvent extends Component {
    state = {
        formData: {
            name: '',
            age: 0
        },
        finalFormData:{}
    }
    handleAgeChange=(event)=>{
        const {value}=event.target;
        this.setState(prevState=>({
            formData:{
                ...prevState.formData,
                age: value
            },
            
        }))
    }
    handleNameChange=(event)=>{
        const {value}=event.target;
        this.setState(prevState=>({
            formData:{
                ...prevState.formData,
                name: value
            }
        }))
    }
    handleSubmit=(event)=>{
        event.preventDefault();
        const {formData}=this.state;
        this.setState(prevState=>({
            ...prevState,
            finalFormData : {
                ...prevState.finalFormData,
                ...formData
            }

        }))
    }
    render() {
        console.log(this.state.formData);
        return (<div>
            <form onSubmit={this.handleSubmit}>
                <input name="name" type="text" placeholder="name" value={this.state.formData.name} onChange={this.handleNameChange}/>
                <input name="age" type="number" placeholder="age" value={this.state.formData.age} onChange={this.handleAgeChange}/>
                <button type="submit" aria-label="submit">Submit</button>
            </form>
            {
                this.state.finalFormData && Object.keys(this.state.finalFormData).length>0 && (
                    <p>final Data is {this.state.finalFormData.name} and {this.state.finalFormData.age}</p>
                )
            }
        </div>)
    }
}

export default FormAndHandleEvent;