/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable global-require */
import React from 'react';

// eslint-disable-next-line import/prefer-default-export
export function Busqueda({ toggleWord }) {
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
export default Busqueda;
