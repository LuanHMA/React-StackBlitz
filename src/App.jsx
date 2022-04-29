import React from 'react';
import './App.css';
import Rotes from './Rotes';
import { BrowserRouter } from 'react-router-dom';

export default function App() {
  return (
    <BrowserRouter>
      <Rotes />
    </BrowserRouter>
  );
}
