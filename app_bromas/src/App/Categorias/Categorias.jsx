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
    <section id="categorias" class="categorias">
      <fieldset>
      <legend>Categorías</legend>
      </fieldset>
      <div onClick={(event) => categoryChange(event.target.id)}>
        <input type="button" id="Misc" class="categorias__general" value="General" />
        <input type="button" id="Programming" class="categorias__programacion" value="Programación" />
        <input type="button" id="Dark" class="categorias__dark" value="Chiste Negro" />
        <input type="button" id="Pun" class="categorias__actualidad" value="Actualidad" />
        <input type="button" id="Spooky" class="categorias__terror" value="Terror" />
        <input type="button" id="Christmas" class="categorias__navidad" value="Navidad" />
      </div>

      <select name="select" onChange={(event) => categoryLengthChange(event.target.value)}>
        <option value="Cualquiera">Me da igual</option>
        <option value="single">Cortos</option>
        <option value="twopart">Largos</option>
      </select>

      <label htmlFor="numChistes">Inserta el número:</label>
      <input type="number" id="numChistes" class="categorias_nchistes" min="1" max="5" onChange={(event) => categoryAmountChange(event.target.value)} />
    </section>
  );
}

export default Categorias;