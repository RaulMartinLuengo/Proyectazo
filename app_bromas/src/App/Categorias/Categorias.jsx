/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable global-require */
import React from 'react';

function Categorias({
  toggleCategory, toggleCategoryAmount, toggleCategoryLength, toggleCategoryAmountLength,
}) {
  let amountCategoryJoke;
  let lengthCategoryJoke;
  const categoryAmountChange = (amount) => {
    amountCategoryJoke = amount;
  };
  const categoryLengthChange = (length) => {
    lengthCategoryJoke = length;
  };
  const categoryChange = (category) => {
    if (lengthCategoryJoke !== undefined && amountCategoryJoke === undefined) {
      if (lengthCategoryJoke !== 'Cualquiera') {
        toggleCategoryLength(category, lengthCategoryJoke);
      } else {
        toggleCategory(category);
      }
    } else if (amountCategoryJoke !== undefined && lengthCategoryJoke === undefined) {
      toggleCategoryAmount(category, amountCategoryJoke);
    } else if (amountCategoryJoke !== undefined && lengthCategoryJoke !== undefined) {
      if (lengthCategoryJoke !== 'Cualquiera') {
        toggleCategoryAmountLength(category, lengthCategoryJoke, amountCategoryJoke);
        // NO BORRAR: Se pone para que el proceso termine aqui y no haga dos fetch
      }
    } else {
      toggleCategory(category);
    }
  };
  return (
    <section id="categorias">
      <h2>Categorías</h2>
      <div onClick={(event) => categoryChange(event.target.id)}>
        <input type="button" id="Misc" value="General" />
        <input type="button" id="Programming" value="Programación" />
        <input type="button" id="Dark" value="Chiste Negro" />
        <input type="button" id="Pun" value="Actualidad" />
        <input type="button" id="Spooky" value="Terror" />
        <input type="button" id="Christmas" value="Navidad" />
      </div>
      <select name="select" onChange={(event) => categoryLengthChange(event.target.value)}>
        <option value="Cualquiera">Me da igual</option>
        <option value="single">Cortos</option>
        <option value="twopart">Largos</option>
      </select>

      <label htmlFor="numChistes">Inserta el número:</label>
      <input type="number" id="numChistes" min="1" max="5" onChange={(event) => categoryAmountChange(event.target.value)} />
    </section>
  );
}

export default Categorias;
