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
    <section id="Longitud" className="longitud">
      <h2>Si quieres chistes aleatorios ¿Cortos o Largos?</h2>
      <hr />
      <div className="longitud__cont">
        <br />
        <label htmlFor="selectLength">Quieres chistes cortos o largos?</label> 
        <select name="selectLenght" idonChange={(evento) => handleLength(evento.target.value)} className="longitud__select">
          <option value="single">Cortos</option>
          <option value="twopart">Largos</option>
        </select>
      </div>
    </section>
  );
}
export default Longitud;
