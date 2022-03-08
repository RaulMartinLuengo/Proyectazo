/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

// eslint-disable-next-line import/prefer-default-export
export function Busqueda() {
  return (
    <section id="busqueda">
      <h2>Piensa una palabra que quieras que se incluya en el chiste </h2>
      <label htmlFor="palabraClave">Ponme a Prueba!!</label>
      <input type="text" id="palabraClave" placeholder="Introduce tu palabra deseada" />
    </section>
  );
}
export default Busqueda;
