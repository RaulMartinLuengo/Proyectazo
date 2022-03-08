/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

function Tematica() {
  return (
    <section id="tematica">
      <h2>Emite el contenido no deseado</h2>

      <input type="checkbox" id="Sexuales" />
      <label htmlFor="Sexuales">Sexuales</label>

      <input type="checkbox" id="Religiosos" />
      <label htmlFor="Religiosos">Religiosos</label>

      <input type="checkbox" id="Políticos" />
      <label htmlFor="Políticos">Políticos</label>

      <input type="checkbox" id="Racistas" />
      <label htmlFor="Racistas">Racistas</label>

      <input type="checkbox" id="Explícito" />
      <label htmlFor="Explícito">Explícito</label>

    </section>
  );
}

export default Tematica;
