import { Component } from "react";

class FormElement extends Component{
 state = {
        firstname: "",
        lastname: ""
    }
    handleChange=(event)=>{
        this.setState({
            firstname: event.target.value,

        })
            }
            onChangeLastname=(event)=>{
                this.setState({
                    lastname:event.target.value,
                })
            }
            handleSubmit = (event)=>{
                event.preventDefault();
                console.log({
                fname: this.state.firstname,
                lname: this.state.lastname,
                })
            }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange} type="text" value={this.state.firstname}/>
                    <input onChange={this.onChangeLastname} type="text" value={this.state.lastname}/>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}
export default FormElement