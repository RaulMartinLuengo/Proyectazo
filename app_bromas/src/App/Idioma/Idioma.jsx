import React from 'react';
import PropTypes from 'prop-types';

// definimos función que recibe como prop la función que es pasada en la llamada a este componente.
// La función recibida es un fetch.
export default function Idioma({ toggleLanguage }) {
  // Creamos otra función la cual recibe como parámetro el valor capturado en el evento onChange del
  // select abajo definido como handleChangeLanguage
  const handleChangeLanguage = (language) => {
    toggleLanguage(language); // Hacemos una llamada a la función fetch pasándole el valor obtenido
  };
  return (
    <section id="idioma" className="idioma">
      <h2>Seleccione el idioma</h2>
      <hr />
      <div className="idioma__cont">
        <label htmlFor="selectidioma">Quieres chistes cortos o largos?</label>
        <select name="select" id="selectidioma" onChange={(event) => handleChangeLanguage(event.target.value)} className="idioma__select">
          <option value="">Seleccione un idioma.</option>
          <option value="es">Español</option>
          <option value="en">Ingles</option>
        </select>
      </div>
    </section>
  );
}

Idioma.propTypes = {
  toggleLanguage: PropTypes.func.isRequired,
};
