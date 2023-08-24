import React from 'react';
import PropTypes from 'prop-types';

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
        <select id="selectLength" name="selectLength" onChange={(evento) => handleLength(evento.target.value)} className="longitud__select">
          <option value="">Seleccione una longitud</option>
          <option value="single">Cortos</option>
          <option value="twopart">Largos</option>
        </select>
      </div>
    </section>
  );
}

Longitud.propTypes = {
  toggleLength: PropTypes.func.isRequired,
};
export default Longitud;
