/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

function Cantidad() {
  return (
    <section id="cantidad">
      <h2>Cuantos chistes quieres??</h2>
      <label htmlFor="numChistes">Inserta el número:</label>
      <input type="number" id="numChistes" min="0" max="5" />
    </section>
  );
}
export default Cantidad;
