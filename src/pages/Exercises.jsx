import React from 'react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';

export default function Exercises() {
  return (
    <div className="container">
      <Header title="Exercicios" />
      <div className="rotes">
        <Link to="/exercises/1"> Ex1 </Link>
      </div>
    </div>
  );
}
