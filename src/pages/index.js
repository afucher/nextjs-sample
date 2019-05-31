import React from 'react';
import { Link } from "gatsby"

const Index = () => (
    <div className="card">
        <h1>Home</h1>
        <h2>Aplicação Gatsby</h2>
        <Link to="/about">About</Link>
    </div>
);

export default Index;