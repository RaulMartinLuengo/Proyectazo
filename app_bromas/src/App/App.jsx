/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/button-has-type */
/* eslint-disable import/no-named-as-default */
/* eslint-disable import/prefer-default-export */
/* eslint-disable max-len */
/* eslint-disbale jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */

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
  const [jokes, setJokes] = useState(defaultJoke);// definimos un hook que contendrá los chistes, además tiene una función seteadora para cambiar el estado del mismo.
  // como estado por defecto le pasamos la variable que está arriba definida
  // funcion fetch parametrizada. Recibe como parámetro un valor numérico, el cual es pasado como prop en otra función llamada Cantidad
  // que se encuentra en el componente Cantidad
  const toggleAmount = (amount) => {
    async function fetchJokes() {
      const jokeCategory = await getAmountJoke(amount);
      setJokes(jokeCategory);// seteamos el hook con los nuevos parámetros recibidos
    }
    fetchJokes();// llamamos a la función para que realice la petición
  };
  // Igual que la anterior, excepto el parámetro que recibe es de tipo string
  const toggleCategory = (categoryname) => {
    async function fetchJokes() {
      const jokeCategory = await getCategoryJoke(categoryname);
      setJokes(jokeCategory);
    }
    fetchJokes();
  };
  // Esta función recibe como props los dos parámetros utilizados en las dos funciones anteriores, lo que permite realizar una petición más detallada del recurso a recuperar
  const toggleCategoryAmount = (categoryname, amount) => {
    async function fetchJokes() {
      const jokeCategory = await getCategoryAmountJoke(categoryname, amount);
      setJokes(jokeCategory);
    }
    fetchJokes();
  };
  // En esta otra función, además de categorías, se solicita que la longitud del joke sea entre chistes cortos o largos
  // las props son pasadas a través de la llamada al componente Categorias. Explicar bien la función de este componente
  const toggleCategoryLength = (categoryname, length) => {
    async function fetchJokes() {
      const jokeCategory = await getCategoryLengthJoke(categoryname, length);
      setJokes(jokeCategory);
    }
    fetchJokes();
  };
  // aquí, tenemos la última función fetch, la cual es un mix de todas la anteriores, por lo que la búsqueda del recurso queda más personalizada
  const toggleCategoryLengthAmount = (categoryname, length, amount) => {
    async function fetchJokes() {
      const jokeCategory = await getCategoryLengthAmountJoke(categoryname, length, amount);
      setJokes(jokeCategory);
    }
    fetchJokes();
  };
  // Con esta función, elegimos el idioma por el que nos decantamos a la hora de hacer la petición de los jokes a la api
  // las props son pasadas a través de la llamada al componetne Idioma. Cuyo componente tiene una función que recibe el valor capturado
  // en el evento onChage del select
  const toggleLanguage = (language) => {
    async function fetchJokes() {
      const jokeCategory = await getLangJoke(language); // Recibe el chiste con un idioma
      setJokes(jokeCategory);
    }
    fetchJokes();
  };
  // Función que permite realizar una petición fetch parametrizada según la palabra introducida en un input
  // la props es pasada en la llamada al componente búsqueda. El componente búsqueda tiene una función la cuál recibe como parámetro el valor que es capturado
  // en el evento onkeyUp del input
  const toggleWord = (word) => {
    async function fetchJokes() {
      const jokeCategory = await getFilterJoke(word);
      setJokes(jokeCategory);
    }
    fetchJokes();
  };
  // Función parametrizada que realiza una petición fetch a una api externa, teniendo como filtro en la petición un valor de uno de los nombres de los atriburtos del
  // objeto del array de jokes.
  // como todas las demás, la props es lanzada en la llamada a su componente
  const toggleLength = (length) => {
    async function fetchJokes() {
      const jokeCategory = await getLengthJoke(length);
      setJokes(jokeCategory);
    }
    fetchJokes();
  };
  // Esta es una función de tipo centinela, con la cual se pretende capturar un valor booleano(true o false), para permitir realizar una función y otra dependiendo de su valor
  // Se le pasan las props como en los demás, a través de la llamada a su componente (temática)
  const toggleFlags = (flag) => {
    async function fetchJokes() {
      const jokeCategory = await getFlagsJoke(flag);
      setJokes(jokeCategory);
    }
    fetchJokes();
  };
  // Función que nos permite setear el estado del hook a un estado por
  const handleJoke = () => {
    setJokes(defaultJoke);
  };
  return (
    <Router>
      <main>
        <div className="container">
          <div className="centrarya">
            <nav onClick={handleJoke} className="centrarya__nav">
              {/* capturamos el evento onClick con el propósito de establecer un valor por defecto para cada vez que se selecciones un elemento del nav
            así, cada vez que iniciemos un componente, nos aparecerá el mismo comentario, y con ello conseguimos que no se queden grabados los chistes anteriormente seleccionados en los otros componentes */}
              <ul className="todo-menu">
                {/* Con cada uno de estos link le estamos diciendo que cuando se les haga click, seamos redirigidos a una página en concreto a través de la llamada a su componente, el cuál es definido como valor en el to */}
                <li><Link to="/" className="centrarya__nav--link">Home</Link></li>
                <li><Link to="/categorias" className="centrarya__nav--link">Categorias</Link></li>
                <li><Link to="/tematica" className="centrarya__nav--link">Tematica</Link></li>
                <li><Link to="/longitud" className="centrarya__nav--link">Longitud</Link></li>
                <li><Link to="/idioma" className="centrarya__nav--link">Idioma</Link></li>
                <li><Link to="/busqueda" className="centrarya__nav--link">Busqueda</Link></li>
                <li><Link to="/cantidad" className="centrarya__nav--link">Cantidad</Link></li>
              </ul>
            </nav>
          </div>
          <div className="container2">
            {/* Este Switch tiene como cometido la entrada en la búsqueda de una coincidencia establecida entre el link que hayamaos clickado y el path del Route definida */}
            <Switch>
              <Route path="/categorias">
                {/* En las llamadas para renderizar el componente, le pasamos como  props el nombre de la función, es decir, la función que realiza el fetch se la estamos pasando al componente */}
                {/* Como podemos comprobar, esta llamada es más compleja, debido a que se necesita pasar como props 4 funciones, ya que la parametrización de la petición puede encontrarse dentro de estas posibilidades */}
                <Categorias toggleCategory={toggleCategory} toggleCategoryAmount={toggleCategoryAmount} toggleCategoryLength={toggleCategoryLength} toggleCategoryAmountLength={toggleCategoryLengthAmount} />
                <div className="render__chiste">
                  <Chistes joke={jokes} />
                  <button type="reset" className="chiste__button--clean" onClick={handleJoke}>Limpiar Chistes</button>
                </div>
              </Route>
              <Route path="/tematica">
                <Tematica toggleFlags={toggleFlags} />
                <div className="render__chiste">
                  <Chistes joke={jokes} />
                  <button type="reset" className="chiste__button--clean" onClick={handleJoke}>Limpiar Chistes</button>
                </div>
              </Route>
              <Route path="/longitud">
                <Longitud toggleLength={toggleLength} />
                <div className="render__chiste">
                  <Chistes joke={jokes} />
                  <button type="reset" className="chiste__button--clean" onClick={handleJoke}>Limpiar Chistes</button>
                </div>
              </Route>
              <Route path="/idioma">
                <Idioma toggleLanguage={toggleLanguage} />
                <div className="render__chiste">
                  <Chistes joke={jokes} />
                  <button type="reset" className="chiste__button--clean" onClick={handleJoke}>Limpiar Chistes</button>
                </div>
              </Route>
              <Route path="/busqueda">
                <Busqueda toggleWord={toggleWord} />
                <div className="render__chiste">
                  <Chistes joke={jokes} />
                  <button type="reset" className="chiste__button--clean" onClick={handleJoke}>Limpiar Chistes</button>
                </div>
              </Route>
              <Route path="/cantidad">
                <Cantidad toggleAmount={toggleAmount} />
                <div className="render__chiste">
                  <Chistes joke={jokes} />
                  <button type="reset" className="chiste__button--clean" onClick={handleJoke}>Limpiar Chistes</button>
                </div>
              </Route>
              {/* Cuidado: El / siempre va al final del Switch */}
              <Route path="/">
                <ArticuloEncabezado />
              </Route>
            </Switch>
          </div>
        </div>
      </main>
    </Router>
  );
}
