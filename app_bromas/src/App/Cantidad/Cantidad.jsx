import React from 'react';
import PropTypes from 'prop-types';

function Cantidad({ toggleAmount }) {
  const handleChangeAmount = (valor) => {
    toggleAmount(valor);
  };
  return (
    <section id="cantidad" className="cantidad">
      <h2>Cuantos chistes aleatorios quieres??</h2>
      <hr />
      <div className="cantidad__cont">
        <br />
        <label htmlFor="numChistes">Inserta el número:</label>
        <input type="number" id="numChistes" min="0" max="5" onChange={(event) => handleChangeAmount(event.target.value)} className="cantidad__numChistes" />
      </div>
    </section>
  );
}
Cantidad.propTypes = {
  toggleAmount: PropTypes.func.isRequired,
};

export default Cantidad;
