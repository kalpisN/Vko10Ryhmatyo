import React from 'react';
import './App.css';
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import TrollNavBar from '../nav/TrollNavBar';
import Home from '../pages/Home';
import FirstFakeGenerate from "../pages/FirstFakeGenerate";
import GenerateTroll from "../functions/GenerateTroll";
import SecondFakeGenerate from "../pages/SecondFakeGenerate";
import FakeButton from "../buttons/FakeButton";




function App() {
  return (
    <div className="App container-fluid">
        <Router>
        <TrollNavBar/>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/fake"><FirstFakeGenerate/>
            </Route>
            <Route path="/2fake"><SecondFakeGenerate/></Route>
            <Route path="/fakebtn"><FakeButton/></Route>
            <Route path="/generate"><GenerateTroll/></Route>
        </Switch>
        </Router>
    </div>
  );
}
export default App;
