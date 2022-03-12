/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable global-require */
/* eslint-disable max-len */
/* eslint-disbale jsx-a11y/click-events-have-key-events */

import React from 'react';
import getImagesUrl from './images';
// La siguiente función recibe como props un array de objetos (jokes). Dicho array es pasado en la llamada es este componente
function Chistes({ joke }) {
  // ahora, lo que pretendemos es diferenciar sobre la elección del tipo de chiste en cuanto a su longitud y además para diferenciar cuando
  // tenemos que setear con el valor por definido por default
  let chiste;
  // si el tipo de joke es igual a un string, pintamos el primer valor del hook, que en realidad es el valor por default
  if (typeof joke === 'string') {
    return (
      <h2>{joke}</h2>
    );
  }
  // Si hay un error entonces mostramos un mensaje que diciendole que no se ha encontrado ningún chiste
  if (joke.error === true) {
    return (
      <fieldset>
        <h2>Lo sentimos, el chiste era tan gracioso que ni lo hemos encontrado. Aun así disfruta del gif.</h2>
        <img src={getImagesUrl(Math.round(Math.random() * 36))} alt="Imagencita" />
      </fieldset>
    );
  }
  // si la cantidad es igual a undefined pasamos al siguiente if, sino, al esle nº2
  if (joke.amount === undefined) {
    // si además de cumplir el anterior if, el valor de la propiedad type es igual a single entonces
    if (joke.type === 'single') {
      // a la variable chiste le asignamos un chiste corto
      chiste = joke.joke;
    } else {
      // sino, le asignamos un chiste largo
      chiste = `${joke.setup} ${joke.delivery}`;
    }
    // si estamos aquí, es porque no hemos entrado nº2, entonces vamos al return
  } else {
    return (
      // este return devuelve el/los valores que se cumplan cuando son mapeados
      joke.jokes.map((jokes) => { // por cada joke del objeto jokes
        // si el valor de la propiedad type de iteración del jokes es igual a single
        if (jokes.type === 'single') {
          // guardamos en chiste el valor de joke, es decir, un chiste corto
          chiste = jokes.joke;
        } else {
          // sino, un chiste largo
          chiste = `${jokes.setup} ${jokes.delivery}`;
        }
        return (
        // devolvemos
          <fieldset key={jokes.id}>
            {/* el título con la categoría del chiste seleccionado */}
            <h3>{jokes.category}</h3>
            {/* el chiste seleccionado */}
            <p>{chiste}</p>
            {/* para poder devolver una imagen aleatoria con cada chiste, hacemos esta genialidad que se me ha ocurrido asin de rápido.
            LLamamos a la función getImagesUrl que se encuentra declarada al final del array de objetos de las fotos, a la cual le pasamos
            un número aleatorio para que nos devuelva la imagen que coincida su id con el número aleatorio  */}
            <img src={getImagesUrl(Math.round(Math.random() * 36))} alt="Perro" />
          </fieldset>
        );
      })
    );
  }

  return (
    <fieldset>
      <h3>{joke.category}</h3>
      <p>{chiste}</p>
      <img src={getImagesUrl(Math.round(Math.random() * 36))} alt="Perro" />
    </fieldset>
  );
}

export default Chistes;
