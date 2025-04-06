import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav>
      <Link to="/">Line</Link> | <Link to="/bar">Bar</Link> | <Link to="/pie">Pie</Link>
    </nav>
  );
}