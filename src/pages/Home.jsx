import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <main>
      <h1>Página inicial</h1>

      <div className="rotes">
        <Link to="/exercises"> Exercicios </Link>
      </div>
    </main>
  );
}
