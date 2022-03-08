/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/button-has-type */
/* eslint-disable import/no-named-as-default */
/* eslint-disable import/prefer-default-export */

import React, { useState } from 'react';
import { ArticuloEncabezado } from './Encabezado/ArticuloEncabezado';
import Categorias from './Categorias/Categorias';
import Tematica from './Tematica/Tematica';
import Longitud from './Longitud/Longitud';
import Idioma from './Idioma/Idioma';
import Busqueda from './Busqueda/Busqueda';
import Cantidad from './Cantidad/Cantidad';
import Chistes from './Chistes/Chistes';
import { getAmountJoke, getCategoryJoke } from '../services/jokeApi';

function App() {
  const [jokes, setJokes] = useState({});
  const toggleAmount = (amount) => {
    async function fetchJokes() {
      const jokeCategory = await getAmountJoke(amount);
      setJokes(jokeCategory);
    }
    fetchJokes();
  };
  const toggleCategory = (categoryname) => {
    async function fetchJokes() {
      const jokeCategory = await getCategoryJoke(categoryname);
      setJokes(jokeCategory);
    }
    fetchJokes();
  };
  return (
    <>
      <ArticuloEncabezado />
      <Categorias toggleCategory={toggleCategory} />
      <Tematica />
      <Longitud />
      <Idioma />
      <Busqueda />
      <Cantidad toggleAmount={toggleAmount} />
      <Chistes joke={jokes} />
      <button type="submit">Enviar</button>
      <button type="reset">Resetear</button>

    </>
  );
}
export default App;
