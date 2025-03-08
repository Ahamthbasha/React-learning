import React, { Component } from 'react'

class form extends Component {

    constructor(props){
        super(props)

        this.state={
            userName:'',
            comments:'',
            topic:'react'
        }
    }

    handleUserNameChange=(event)=>{
        this.setState({
            userName:event.target.value
        })
    }

    handleComments=((event)=>{
        this.setState({
            comments:event.target.value
        })
    })

    handleTopicChange=((event)=>{
        this.setState({
            topic:event.target.value
        })
    })

    handleSubmit=((event)=>{
        alert(`${this.state.userName} ${this.state.comments} ${this.state.topic}`)
        event.preventDefault()
    })

  render() {
    const {userName,comments,topic}=this.state
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
            <label>UserName</label>
            <input type='text' value={userName} onChange={this.handleUserNameChange}/>
        </div>

        <div>
            <label>Comments</label>
            <textarea value={comments} onChange={this.handleComments}></textarea>
        </div>

        <div>
            <label>Topic</label>
            <select value={topic} onChange={this.handleTopicChange}>
                <option value="react">React</option>
                <option value="angular">Angular</option>
                <option value="vue">Vue</option>
            </select>
        </div>
        <button>submit</button>
      </form>
    )
  }
}

export default form

// 1.Create component state

/*

1.label and text
2.create props
3.function

*/