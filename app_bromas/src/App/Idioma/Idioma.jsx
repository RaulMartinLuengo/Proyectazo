/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable global-require */
import React from 'react';

export default function Idioma({ toggleLanguage }) {
  const handleChangeLanguage = (language) => {
    toggleLanguage(language);
  };
  return (
    <section id="idioma" className="idioma">
      <h2>Seleccione el idioma</h2>
      <hr />
      <select name="select" onChange={(event) => handleChangeLanguage(event.target.value)} className="idioma__select">
        <option value="es">Español</option>
        <option value="en">Ingles</option>
      </select>
    </section>
  );
}
