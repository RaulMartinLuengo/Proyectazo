/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable global-require */
import React from 'react';

function Chistes({ joke }) {
  return (

    <fieldset>
      <h3>{joke.category}</h3>

      <img src={require('../../img/perro.jpg')} alt="Perro" />
    </fieldset>
  );
}
export default Chistes;
