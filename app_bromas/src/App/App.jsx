/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/button-has-type */
/* eslint-disable import/no-named-as-default */
/* eslint-disable import/prefer-default-export */

import React, { useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
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

export function App() {
  const defaultJoke = 'No hay ningún chiste activo';
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
  const handleJoke = () => {
    setJokes(defaultJoke);
  };
  return (
    <Router>
      <nav onClick={handleJoke}>
        <Link to="/">Home</Link>
        <br />
        <Link to="/categorias">Categorias</Link>
        <br />
        <Link to="/tematica">Tematica</Link>
        <br />
        <Link to="/longitud">Longitud</Link>
        <br />
        <Link to="/idioma">Idioma</Link>
        <br />
        <Link to="/busqueda">Busqueda</Link>
        <br />
        <Link to="/cantidad">Cantidad</Link>
      </nav>
      <main>

        <div className="container">
          <Switch>
            <Route path="/categorias">
              <Categorias toggleCategory={toggleCategory} toggleCategoryAmount={toggleCategoryAmount} toggleCategoryLength={toggleCategoryLength} toggleCategoryAmountLength={toggleCategoryLengthAmount} />
              <Chistes joke={jokes} />
              <button type="reset" onClick={handleJoke}>Limpiar Chistes</button>
            </Route>
            <Route path="/tematica">
              <Tematica toggleFlags={toggleFlags} />
              <Chistes joke={jokes} />
              <button type="reset" onClick={handleJoke}>Limpiar Chistes</button>
            </Route>
            <Route path="/longitud">
              <Longitud toggleLength={toggleLength} />
              <Chistes joke={jokes} />
              <button type="reset" onClick={handleJoke}>Limpiar Chistes</button>
            </Route>
            <Route path="/idioma">
              <Idioma toggleLanguage={toggleLanguage} />
              <Chistes joke={jokes} />
              <button type="reset" onClick={handleJoke}>Limpiar Chistes</button>
            </Route>
            <Route path="/busqueda">
              <Busqueda toggleWord={toggleWord} />
              <Chistes joke={jokes} />
              <button type="reset" onClick={handleJoke}>Limpiar Chistes</button>
            </Route>
            <Route path="/cantidad">
              <Cantidad toggleAmount={toggleAmount} />
              <Chistes joke={jokes} />
              <button type="reset" onClick={handleJoke}>Limpiar Chistes</button>
            </Route>
            {/* Cuidado: El / siempre va al final del Switch */}
            <Route path="/">
              <ArticuloEncabezado />
            </Route>
          </Switch>
        </div>
      </main>
    </Router>
  );
}
