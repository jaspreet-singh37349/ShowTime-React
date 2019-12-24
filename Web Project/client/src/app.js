import React,{Component} from 'react';
import anime from "./component/animePage"
import Movie from "./component/moviePage"
import TVshow from "./component/TVshowsPage"
import { HashRouter as Router, Route} from 'react-router-dom';
import SignUp from './component/SignUp';
import Login from './component/Login';

class App extends Component
{
    render()
    {
        return (
            <Router>
                <React.Fragment>
                    <Route exact path="/" component={anime} />
                    <Route path="/anime" component={anime} />
                    <Route path="/movies" component={Movie} />
                    <Route path="/tvshows" component={TVshow} />
                    <Route path="/signup" component={SignUp} />
                    <Route path="/login" component={Login} />
                </React.Fragment>
            </Router>
        )
    }
}

export default App;