import React from "react";
import Link from "next/link";

const About = () => (
    <div className="card">
        <h1>About</h1>
        <h2>Esse é o about da aplicação</h2>
        <Link href="/">Home</Link>
    </div>
);

export default About;