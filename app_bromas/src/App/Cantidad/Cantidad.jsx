/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable global-require */
import React from 'react';

function Cantidad({ toggleAmount }) {
  const handleChangeAmount = (valor) => {
    toggleAmount(valor);
  };
  return (
    <section id="cantidad">
      <h2>Cuantos chistes aleatorios quieres??</h2>
      <label htmlFor="numChistes">Inserta el número:</label>
      <input type="number" id="numChistes" min="0" max="5" onChange={(event) => handleChangeAmount(event.target.value)} />
    </section>
  );
}
export default Cantidad;
