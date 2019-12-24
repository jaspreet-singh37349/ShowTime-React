import React,{Component} from 'react'
import { Link } from "react-router-dom"
import animapi from './animeApi'
import movieapi from './movieApi'
import tvapi from './tvshowApi'

import '../../node_modules/bootstrap/dist/css/bootstrap.css';

class Navbar extends Component
{
  state={
    btn1: "SignUp",
    btn2: "Login"
  }

  componentDidMount()
  {

    if(this.props.auth===true)
    {
      this.setState({
        btn1:this.props.data.name,
        btn2:"Logout"
      });
    }
    else
    {
      console.log("nooooo")
    }
  }

    Search = ()=>
    {
      if(this.props.type==="Anime")
      {
        animapi();
      }
      else if(this.props.type==="Movie")
      {
        movieapi();
      }
      else if(this.props.type==="TV")
      {
        tvapi();
      }
    }

    render()
    {
      let kid = null;

      if(this.props.auth===true) {
        kid = <React.Fragment>
        <li className="nav-item nav-link" >{this.state.btn1}</li>
    <li className="nav-item nav-link">{this.state.btn2}</li>
    </React.Fragment>
      }

     else {
        kid =    <React.Fragment>
      <li className="nav-item">
        <Link className="nav-link" to="/signup">{this.state.btn1}</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/login">{this.state.btn2}</Link>
      </li>
        </React.Fragment>
    
      }
    
        return <nav className="navbar navbar-expand-lg navbar-dark navbar-light bg-dark">
        <li className="navbar-brand">ShowTime</li>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/anime">Anime</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/movies">Movies</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/tvshows">TV Shows</Link>
            </li>
            <li className="nav-item">
              <input type="text" id="inputSearch" placeholder="Search"></input>
            </li>
            <li className="nav-item">
              <button id="search" onClick={this.Search} className="btn btn-default">Search</button>
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link" to="/signup">{this.state.btn1}</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">{this.state.btn2}</Link>
            </li> */}
            {kid}
          </ul>
          
        </div>
      </nav>
    }
}

export default Navbar;