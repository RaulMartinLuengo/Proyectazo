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
    <section id="categorias" className="categorias">
      <h2>Categorías</h2>
      <hr />
      <div onClick={(event) => categoryChange(event.target.id)} className="categorias__botones">
        <input type="button" id="Misc" value="General" className="categorias__button" />
        <input type="button" id="Programming" value="Programación" className="categorias__button" />
        <input type="button" id="Dark" value="Chiste Negro" className="categorias__button" />
        <input type="button" id="Pun" value="Actualidad" className="categorias__button" />
        <input type="button" id="Spooky" value="Terror" className="categorias__button" />
        <input type="button" id="Christmas" value="Navidad" className="categorias__button" />
      </div>
      <select name="select" onChange={(event) => categoryLengthChange(event.target.value)} className="categorias__select">
        <option value="Cualquiera">Me da igual</option>
        <option value="single">Cortos</option>
        <option value="twopart">Largos</option>
      </select>

      <label htmlFor="numChistes">Inserta el número:</label>
      <input type="number" id="numChistes" min="1" max="5" className="categorias__numChistes" onChange={(event) => categoryAmountChange(event.target.value)} />
    </section>
  );
}

export default Categorias;
