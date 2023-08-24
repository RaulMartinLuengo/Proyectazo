import React from 'react';
import PropTypes from 'prop-types';

function Tematica({ toggleFlags }) {
  const handleFlags = (flag) => {
    toggleFlags(flag);
  };
  return (
    <section id="tematica" onClick={(evento) => handleFlags(evento.target.id)} onKeyDown={(evento) => { if (evento.key === 'Enter') { handleFlags(evento.target.id); } }} className="tematica" tabIndex="0" role="button">
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
Tematica.propTypes = {
  toggleFlags: PropTypes.func.isRequired,
};

export default Tematica;
