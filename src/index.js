import React from 'react';
import ReactDOM from 'react-dom';
import {Home} from './Component/Home';
import {About} from "./Component/About";
import {BrowserRouter, Route} from "react-router-dom";

ReactDOM.render(
    <BrowserRouter>
        <Route path="/" exact={true} component={Home}/>
        <Route path="/about" component={About}/>
    </BrowserRouter>
    , document.getElementById('root'));
