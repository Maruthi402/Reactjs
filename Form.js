import React, { Component } from 'react'

class Form extends Component {
        constructor(props){
            super(props)

            this.state = {
                username: '',
                comments: '',
                password: '',
                email: '',
                topic: ''
               
            }
        }
        handleUsernameChange= (event)=> {
            this.setState({
                username: event.target.value

            })
        }

        handleCommentsChange = (event) => {
            this.setState({
                comments: event.target.value
            })
        }

        handlePasswordChange = event => {
            this.setState({
                password: event.target.value
            })
        }
        handleEmailChange = event =>{
            this.setState({
                email: event.target.value
            })
        }
        handleTopicChange = (event) => {
            this.setState({
                topic: event.target.value
            })
        }
        handleSubmit = (event) =>{
            alert(`${this.state.username} ${this.state.password} ${this.state.comments} ${this.state.topic} ${this.state.email}`)
            event.preventDefault()
        }
          

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                    <div>
                    
                        <label>Username</label>
                        <input type="text" value={this.state.username} onChange={this.handleUsernameChange} />
                    
                    
                        <label>Password</label>
                        <input type="password" value={this.state.password} onChange={this.handlePasswordChange} />
                  

                        <label>Comments</label>
                        <textarea value={this.state.comments} onChange={this.handleCommentsChange}></textarea>

                        <label>Email</label>
                        <input value={this.state.email} onChange={this.handleEmailChange} />

                        <label>Topic</label>
                        <select value={this.state.topic} onChange={this.handleTopicChange} >
                        <option value="html">HTML</option>
                        <option value='css'>CSS</option>
                        <option value='javascript'>JAVASCRIPT</option>
                        </select>
                        <button type='submit'>Submit</button>
                    </div>
                    
                       
                    
                
            </form>
           
        )
    }
}

export default Form