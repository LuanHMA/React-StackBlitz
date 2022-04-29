import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

export default function Header(props) {
  return (
    <header>
      <h1>{props.title || 'Componente'}</h1>
      <Link to="/"> Ínicio </Link>
    </header>
  );
}
