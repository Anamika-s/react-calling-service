import React, { Component } from 'react'

export default class Create extends Component {
  constructor(props)
  {
    super(props);
    this.state={
      firstName:"",
      lastName:"",
      email:""
    }
  }
  handleChange=(event)=>
  {
    console.log("a");
    this.setState({[event.target.name] : event.target.value})
  }
  handleSubmit=(event)=>
  {
    event.preventDefault();
    console.log(this.state);
    alert(JSON.stringify(this.state));
    fetch("https://reqres.in/api/users?page=2" , {
      method:'POST',
      headers:
    {
    'Accept':'application/json',
    'Content-Type' :'application/json'
    },
    body: JSON.stringify(this.state)
  }).then((resp)=>
  
  {
    resp.json((result)=>
    {
      console.log(result);
      console.log("Record is inserted");
    })
       
    })
    }
  
  render() {
    return (
      <div>
        <h1> Create </h1>

  <form onSubmit={this.handleSubmit}>
        
    <div>
      <label> First Name </label>
      <input type="text" name="firstName" value={this.state.firstName} onChange={this.handleChange}/>
    </div>

    
    <div>
      <label> Last Name </label>
      <input type="text" name="lastName" value={this.state.lastName}  onChange={this.handleChange}/>
    </div>

    
    <div>
      <label> EMail </label>
      <input type="text" name="email" value={this.state.email}  onChange={this.handleChange}/>
    </div>
    <button type='submit'> Submit </button>
  </form>

        
      </div>
    )


    
  }
}
