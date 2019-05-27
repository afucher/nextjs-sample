import React from "react";
import {Link} from "react-router-dom";

export const About = () => (
    <div className="card">
        <h1>About</h1>
        <h2>Esse é o about da aplicação</h2>
        <Link to={"/"}>Home</Link>
    </div>
);