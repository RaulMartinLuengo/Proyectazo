/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable global-require */
import React from 'react';

function Longitud({ toggleLength }) {
  const handleLength = (length) => {
    toggleLength(length);
  };
  return (
    <section id="Longitud">
      <h2>Si quieres chistes aleatorios ¿Cortos o Largos?</h2>
      <select name="select" onChange={(evento) => handleLength(evento.target.value)}>
        <option value="single">Cortos</option>
        <option value="twopart">Largos</option>
      </select>
    </section>
  );
}
export default Longitud;
