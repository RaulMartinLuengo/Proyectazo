/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

function Categorias() {
  return (
    <section id="categorias">
      <h2>Categorías</h2>

      <input type="checkbox" id="general" />
      <label htmlFor="general">General</label>

      <input type="checkbox" id="programacion" />
      <label htmlFor="programacion">Programación</label>

      <input type="checkbox" id="actualidad" />
      <label htmlFor="actualidad">Actualidad</label>

      <input type="checkbox" id="terror" />
      <label htmlFor="terror">Terror</label>

      <input type="checkbox" id="navidad" />
      <label htmlFor="navidad">Navidad</label>

    </section>
  );
}

export default Categorias;
