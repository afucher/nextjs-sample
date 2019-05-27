import React from 'react';
import Link from "next/link";

const Index = () => (
    <div className="card">
        <h1>Home</h1>
        <h2>Aplicação Nextjs</h2>
        <Link href="/about">About</Link>
    </div>
);

export default Index;