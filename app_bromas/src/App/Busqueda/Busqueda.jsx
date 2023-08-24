import React from 'react';
import PropTypes from 'prop-types';

export default function Busqueda({ toggleWord }) {
  const handleWrite = (word) => {
    toggleWord(word);
  };
  return (
    <section id="busqueda" className="busqueda">
      <h2>Piensa una palabra que quieras que se incluya en el chiste </h2>
      <hr />
      <div className="longitud__cont">
        <br />
        <label htmlFor="palabraClave">Ponme a Prueba!!</label>
        <input type="text" id="palabraClave" placeholder="Con qué lo quieres?" onKeyUp={(evento) => handleWrite(evento.target.value)} className="busqueda__input" />
      </div>
    </section>
  );
}

Busqueda.propTypes = {
  toggleWord: PropTypes.func.isRequired,
};
