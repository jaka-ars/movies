import React from "react"
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import logo from './logo.png'
import MoviesList from "./components/movies-list";
import MovieDetails from "./components/movie-details";

function App() {
    return (
        <Router>
            <header className="app-header">
                <Link to="/">
                    <img src={logo} alt=""/>
                </Link>
            </header>
            <Route exact path="/" component={() => <MoviesList /> } />
            <Route exact path="/:id" component={() => <MovieDetails /> } />
        </Router>
    );
}

export default App;
