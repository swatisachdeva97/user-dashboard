import './App.css';
import ManageUserProfileContainer from './components/ManageUserProfileContainer';
import SearchContainer from './components/TopContainer';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Router, Route, Link } from "react-router-dom";
import { createBrowserHistory as createHistory } from "history";
import "./App.css";
const history = createHistory();

function App() {
    return (
        <div className="App">
        <Router history={history}>
            <Route path="/" exact component={ManageUserProfileContainer} />
            <Route path="/search" exact component={SearchContainer} />
        </Router>
        </div>
    );
}
export default App;
