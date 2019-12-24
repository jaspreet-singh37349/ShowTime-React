import React, { Component } from 'react';
import { Link,NavLink,Redirect } from 'react-router-dom';
import axios from 'axios'
import '../form.css'


class SignUp extends Component {
    constructor() {
        super();

        this.state = {
            email: '',
            password: '',
            name: '',
            hasAgreed: false,
            CurrentToken: '',
            authenticated: false,
            userJSON: {}
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        let target = e.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let name = target.name;

        this.setState({
          [name]: value
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        const user = {
          name: this.state.name,
          email:this.state.email,
          password:this.state.password
        }

        this.setState({
          userJSON: user
        });
        

        console.log('The form was submitted with the following data:');
        console.log(this.state.userJSON);

        if(this.state.hasAgreed)
        {
          axios.post('http://127.0.0.1:5000/users',{
            "name":this.state.name,
            "email":this.state.email,
            "password":this.state.password
          }).then(res => {
          console.log(res);
          //this.setState({CurrentToken: res.data.token});
          });
          this.setState({
            authenticated: true
          });
        }
        else
        {
          axios.get('http://127.0.0.1:5000/users/me',{
            'headers': {
              'Authorization': 'Bearer '+ this.state.CurrentToken
          }
          }).then(res=>{
            console.log(res);
          })
          document.getElementById("checkk").style.color="red";
        }
      
    }

    render() {

      if(this.state.authenticated)
      {
        return <Redirect to={{
          pathname: '/',
          auth: this.state.authenticated,
          data:this.state.userJSON
        }}

        />
      }

        return (
            <div className="App">
          <div className="App__Aside"></div>
          <div className="App__Form">
            <div className="PageSwitcher">
                <NavLink to={{pathname: '/login',auth: this.state.authenticated}} activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign In</NavLink>
                <NavLink exact to="signup" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign Up</NavLink>
              </div>

              <div className="FormTitle">
                  <NavLink to={{pathname: '/login',auth: this.state.authenticated}} activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign In</NavLink> or <NavLink exact to="signup" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign Up</NavLink>
              </div>

              <div className="FormCenter">
            <form onSubmit={this.handleSubmit} className="FormFields">
              <div className="FormField">
                <label className="FormField__Label" htmlFor="name">Full Name</label>
                <input type="text" id="name" className="FormField__Input" placeholder="Enter your full name" name="name" value={this.state.name} onChange={this.handleChange} />
              </div>
              <div className="FormField">
                <label className="FormField__Label" htmlFor="password">Password</label>
                <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password" value={this.state.password} onChange={this.handleChange} />
              </div>
              <div className="FormField">
                <label className="FormField__Label" htmlFor="email">E-Mail Address</label>
                <input type="email" id="email" className="FormField__Input" placeholder="Enter your email" name="email" value={this.state.email} onChange={this.handleChange} />
              </div>

              <div className="FormField">
                <label className="FormField__CheckboxLabel">
                    <input className="FormField__Checkbox" type="checkbox" name="hasAgreed" value={this.state.hasAgreed} onChange={this.handleChange} /><span id="checkk"> I agree all statements in </span><Link to="/signup" className="FormField__TermsLink">terms of service</Link>
                </label>
              </div>

              <div className="FormField">
                  <button onSubmit={this.handleSubmit} className="FormField__Button mr-20">Sign Up</button> <Link to="/login" className="FormField__Link">I'm already member</Link>
              </div>
            </form>
          </div>
              
          </div>

        </div>
            
        
        );
    }
}
export default SignUp;