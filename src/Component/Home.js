import React from 'react';
import {Link} from "react-router-dom";

export const Home = () => (
    <div className="card">
        <h1>Home</h1>
        <h2>Aplicação CSR</h2>
        <Link to={"/about"}>About</Link>
    </div>
);