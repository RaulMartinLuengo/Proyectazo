/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable global-require */
import React from 'react';
/* Recibir array y recorrerlo */
function Chistes({ joke }) {
  let chiste;

  async function fetchImg() {
    const data = await fetch('../../services/images.json');
    const img = await data.json();

    return img;
  }
  console.log(fetchImg());
  if (typeof joke === 'string') {
    return (
      <h2>{joke}</h2>
    );
  }
  if (joke.amount === undefined) {
    if (joke.type === 'single') {
      chiste = joke.joke;
    } else {
      chiste = `${joke.setup} ${joke.delivery}`;
    }
  } else {
    return (
      joke.jokes.map((jokes) => {
        if (jokes.type === 'single') {
          chiste = jokes.joke;
        } else {
          chiste = `${jokes.setup} ${jokes.delivery}`;
        }
        return (
          <fieldset key={jokes.id}>
            <h3>{jokes.category}</h3>
            <p>{chiste}</p>
            <img src={require('../../img/1.jpeg')} alt="Perro" />
          </fieldset>
        );
      })
    );
  }

  return (
    <fieldset>
      <h3>{joke.category}</h3>
      <p>{chiste}</p>
      <img src={require('../../img/1.jpeg')} alt="Perro" />
    </fieldset>
  );
}
export default Chistes;
