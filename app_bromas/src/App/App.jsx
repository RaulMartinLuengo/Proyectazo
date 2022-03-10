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
import {
  getAmountJoke, getCategoryAmountJoke, getCategoryJoke, getCategoryLengthAmountJoke, getCategoryLengthJoke, getFilterJoke, getFlagsJoke, getLangJoke, getLengthJoke,
} from '../services/jokeApi';

function App() {
  const defaultJoke = 'Bienvenido a la app de Chistes.';
  // Hook para los chistes cuyo estado inicial será un objeto vacío
  const [jokes, setJokes] = useState(defaultJoke);
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
  const toggleCategoryAmount = (categoryname, amount) => {
    async function fetchJokes() {
      const jokeCategory = await getCategoryAmountJoke(categoryname, amount);
      setJokes(jokeCategory);
    }
    fetchJokes();
  };
  const toggleCategoryLength = (categoryname, length) => {
    console.log(length);
    async function fetchJokes() {
      const jokeCategory = await getCategoryLengthJoke(categoryname, length);
      setJokes(jokeCategory);
    }
    fetchJokes();
  };
  const toggleCategoryLengthAmount = (categoryname, length, amount) => {
    async function fetchJokes() {
      const jokeCategory = await getCategoryLengthAmountJoke(categoryname, length, amount);
      setJokes(jokeCategory);
    }
    fetchJokes();
  };
  // Fetch cuando se le pasa el idioma.
  const toggleLanguage = (language) => {
    async function fetchJokes() {
      const jokeCategory = await getLangJoke(language); // Recibe el chiste con un idioma
      setJokes(jokeCategory);
    }
    fetchJokes();
  };
  const toggleWord = (word) => {
    async function fetchJokes() {
      const jokeCategory = await getFilterJoke(word);
      setJokes(jokeCategory);
    }
    fetchJokes();
  };
  const toggleLength = (length) => {
    async function fetchJokes() {
      const jokeCategory = await getLengthJoke(length);
      setJokes(jokeCategory);
    }
    fetchJokes();
  };
  const toggleFlags = (flag) => {
    async function fetchJokes() {
      const jokeCategory = await getFlagsJoke(flag);
      setJokes(jokeCategory);
    }
    fetchJokes();
  };
  return (
    <>
      <ArticuloEncabezado />
      <Categorias toggleCategory={toggleCategory} toggleCategoryAmount={toggleCategoryAmount} toggleCategoryLength={toggleCategoryLength} toggleCategoryAmountLength={toggleCategoryLengthAmount} />
      <Tematica toggleFlags={toggleFlags} />
      <Longitud toggleLength={toggleLength} />
      <Idioma toggleLanguage={toggleLanguage} />
      <Busqueda toggleWord={toggleWord} />
      <Cantidad toggleAmount={toggleAmount} />
      <Chistes joke={jokes} />
      <button type="submit">Enviar</button>
      <button type="reset">Resetear</button>

    </>
  );
}
export default App;
