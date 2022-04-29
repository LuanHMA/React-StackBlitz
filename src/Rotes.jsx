import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Exercises from './pages/Exercises';
import Home from './pages/Home';

export default function Rotes() {
  return (
    <>
      <Routes>
        <Route path="/exercises" element={<Exercises />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}
