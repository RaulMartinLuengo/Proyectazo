/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable global-require */
import React from 'react';

function Categorias({ toggleCategory }) {
  const categoryChange = (category) => {
    if (category.target.checked) {
      toggleCategory(category.target.id);
    }
  };
  return (
    <section id="categorias">
      <h2>Categorías</h2>

      <input type="checkbox" id="Misc" onChange={(event) => categoryChange(event)} />
      <label htmlFor="Misc">General</label>

      <input type="checkbox" id="Programming" onChange={(event) => categoryChange(event)} />
      <label htmlFor="Programming">Programación</label>

      <input type="checkbox" id="Dark" onChange={(event) => categoryChange(event)} />
      <label htmlFor="Dark">Chistes negros</label>

      <input type="checkbox" id="Pun" onChange={(event) => categoryChange(event)} />
      <label htmlFor="Pun">Actualidad</label>

      <input type="checkbox" id="Spooky" onChange={(event) => categoryChange(event)} />
      <label htmlFor="Spooky">Terror</label>

      <input type="checkbox" id="Christmas" onChange={(event) => categoryChange(event)} />
      <label htmlFor="Christmas">Navidad</label>

    </section>
  );
}

export default Categorias;
