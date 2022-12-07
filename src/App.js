import logo from './logo.svg';
import './App.css';


import React, { Component } from 'react'
import Register from './Components/Register';
import Greet from './Components/Greet';

class App extends Component {
  constructor(props) {
    super(props)
  
    // at start the isRegistered condition is FALSE because there is nothing inside the input fields is being filled
    // and thats why name, email and password are also null 
    
    this.state = {
       isRegistered: false,
       name: null,
       email: null,
       password: null,
    }
  }

  
  // the EVENT CREATED BY onSubmit event handler is CAPTURED by this registrationHandler function

  registrationHandler = (event) => {
    const name= event.target.name.value;
    const email= event.target.email.value;
    const password= event.target.password.value;
    
    
    this.setState({ name, email, password, isRegistered: true});
    // this will set a new state to which we have entered the values inside the name, email and password attributes

    event.preventDefault();
    // this preventDefault will prevent page from reloading 
  }


  render() {
    return (
      <div>
        {this.state.isRegistered ? (<Greet name={this.state.name} email={this.state.email}></Greet>) : (<Register submit={this.registrationHandler}></Register>)}
      </div>
    )
  }
}

export default App


