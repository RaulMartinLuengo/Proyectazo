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
    <section id="busqueda" class="busqueda">
      <h2>Piensa una palabra que quieras que se incluya en el chiste </h2>
      <label htmlFor="palabraClave">Ponme a Prueba!!</label>
      <input type="text" id="palabraClave" class="busqueda__palabraclave" placeholder="Introduce tu palabra deseada" onKeyUp={(evento) => handleWrite(evento.target.value)} />
    </section>
  );
}
export default Busqueda;
