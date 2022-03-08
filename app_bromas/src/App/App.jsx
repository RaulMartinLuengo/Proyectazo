/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/button-has-type */
/* eslint-disable import/no-named-as-default */
/* eslint-disable import/prefer-default-export */

import React, { useState, useEffect } from 'react';
import { ArticuloEncabezado } from './Encabezado/ArticuloEncabezado';
import Categorias from './Categorias/Categorias';
import Tematica from './Tematica/Tematica';
import Longitud from './Longitud/Longitud';
import Idioma from './Idioma/Idioma';
import Busqueda from './Busqueda/Busqueda';
import Cantidad from './Cantidad/Cantidad';
import Chistes from './Chistes/Chistes';
import { getCategoryJoke } from '../services/FecthCategory/FecthCategory';

function App() {
  const [jokes, setJokes] = useState();
  useEffect(() => {
    // declaramos la función asíncrona que llama al servicio
    async function fetchJokes() {
      const jokeCategory = await getCategoryJoke();
      setJokes(jokeCategory);
    }
    // llamamos a la función
    fetchJokes();
  });

    <>
      <ArticuloEncabezado />
      <Categorias />
      <Tematica />
      <Longitud />
      <Idioma />
      <Busqueda />
      <Cantidad />
      <div>
        {jokes.map((joke) => (
          <Chistes joke={joke} />
        ))}
      </div>

      <button type="submit">Enviar</button>
      <button type="reset">Resetear</button>

    </>;
    document.getElementById('root');
}
export default App;
