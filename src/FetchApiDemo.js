import React, { Component } from 'react'

export default class FetchApiDemo extends Component {
  constructor()
  {
    super();
    this.state=
    {
      users : null
    }
  }
   componentDidMount()
  {
  
    fetch('https://reqres.in/api/users?page=2').then((resp)=>
      {
        resp.json().then((result)=>
        {
        console.log(result.data)
  
         this.setState({users:result.data})
      })
     })
   }
  

  
  render() {
    return (
 <div>FetchApiDemo
<h1> List of Users</h1>
{
  this.state.users ?
  this.state.users.map((item, i)=>
   
   <div>
     <p> {i} {item.first_name}  {item.last_name} </p>
     </div>       
  )
  : <h2> There are no users </h2>
  } 


<button onClick={this.GetUsers}> Get Users </button>

      </div>
    );
  }
}
