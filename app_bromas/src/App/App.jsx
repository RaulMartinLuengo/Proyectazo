import './App.css';
import { Link, Outlet } from 'react-router-dom';
import React from 'react';

function App() {
  return (
    <div className="App">
      <nav
        style={{
          borderBottom: 'solid 1px',
          paddingBottom: '1rem',
        }}
      >
        <Link to="/jokes">Jokes</Link>
      </nav>
      <Outlet />
      <button
        type="button"
        className="joke-enviar"
      >
        Enviar
      </button>
      <button
        type="button"
        className="joke-clear"
      >
        Reset
      </button>
    </div>
  );
}

export default App;
