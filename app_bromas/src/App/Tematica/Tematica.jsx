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
    <section id="tematica" onClick={(evento) => handleFlags(evento.target.id)} className="tematica">
      <h2>Chiste aleatorio sin contenido no deseado</h2>
      <hr />
      <div className="tematica__botones">
        <input type="button" value="Sexuales" id="nsfw" className="button" />
        <input type="button" value="Religiosos" id="religious" className="button" />
        <input type="button" value="Políticos" id="political" className="button" />
        <input type="button" value="Racistas" id="racist" className="button" />
        <input type="button" value="Explícito" id="explicit" className="button" />
      </div>
    </section>
  );
}

export default Tematica;
