/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable global-require */
import React from 'react';

function Tematica({ toggleFlags }) {
  const handleFlags = (flag) => {
    toggleFlags(flag);
  };
  return (
    <section id="tematica" onClick={(evento) => handleFlags(evento.target.id)}>
      <h2>Chiste aleatorio sin contenido no deseado</h2>

      <input type="button" value="Sexuales" id="nsfw" />

      <input type="button" value="Religiosos" id="religious" />

      <input type="button" value="Políticos" id="political" />

      <input type="button" value="Racistas" id="racist" />

      <input type="button" value="Explícito" id="explicit" />
    </section>
  );
}

export default Tematica;
