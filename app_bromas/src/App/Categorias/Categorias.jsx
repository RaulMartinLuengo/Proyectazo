/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable global-require */
import React from 'react';
//función que recibe como props 4 funciónes que realizan fetch parametrizadas a una api externa
function Categorias({
  toggleCategory, toggleCategoryAmount, toggleCategoryLength, toggleCategoryAmountLength,
}) {
  let amountCategoryJoke;//variables que van a guardar los valores que se obtengan en las dos siguientes funciones
  let lengthCategoryJoke;
  //función que recibe un valor y se le asigna a la variable arriba declarada
  const categoryAmountChange = (amount) => {
    amountCategoryJoke = amount;
  };
  //función que recibe un valor y se le asigna a la variable arriba declarada
  const categoryLengthChange = (length) => {
    lengthCategoryJoke = length;
  };
  //Esta función recibe como parámetro el valor capturado en evento onClick del div que alberga los 6 input con role de button, los cuales 
  //están destinados a la selección de la categoría del tipo de chiste (joke)
  const categoryChange = (category) => {
    //si la longitud del joke es diferente a undefined y la cantidad de jokes es igual a undefined,pasas al siguiente if, si no saltas al else
    if (lengthCategoryJoke !== undefined && amountCategoryJoke === undefined) {
      if (lengthCategoryJoke !== 'Cualquiera') {
         //si además de las posibilades anteriores, también la longitud del joke es diferente de cualquiera
        toggleCategoryLength(category, lengthCategoryJoke);//llamamos a la función  toggleCategoryLength para que realice el fetch con las siguientes características
      } else {
        toggleCategory(category);//llamas a la función toggleCategory y le pasas como parámetro la categoría para que haga el fetch
      }
      //si no es el primer if, entonces
    } else if (amountCategoryJoke !== undefined && lengthCategoryJoke === undefined) {
      //si la cantidad de chistes deseados es diferente a undefined y la longitud es igual a undefined
      toggleCategoryAmount(category, amountCategoryJoke);//llamamos a la función fetch  toggleCategoryAmount y le pasamos los valores para que realice la petición
       // si no es el primer if ni el anterior a este en el que nos encontramos, entonces
    } else if (amountCategoryJoke !== undefined && lengthCategoryJoke !== undefined) {
      // si la cantidad de chistes deseos es diferente a undefined y la longitud tambien, pasamos al siguienete if, sino, al else
      if (lengthCategoryJoke !== 'Cualquiera') {
        //si además del if anterior, la longitud es diferente a cualquiera
        toggleCategoryAmountLength(category, lengthCategoryJoke, amountCategoryJoke);//llamamos a la función fetch y le pasamos los valores
      }
    } else {
      //sino, entonces llamamos a la función fetch y le pasamos solo la categoría
      toggleCategory(category);
    }
  };
  return (
    <section id="categorias" className="categorias">
      <h2>Categorías</h2>
      <hr />
       {/* capturamos el valor del elemento que desencadena el evento onClick, con el propósito de 
      llamar a la función categoryChange y pasárselo como prop para que realice el fethc con esas características */}
      <div onClick={(event) => categoryChange(event.target.id)} className="categorias__botones">
        <input type="button" id="Misc" value="General" className="categorias__button" />
        <input type="button" id="Programming" value="Programación" className="categorias__button" />
        <input type="button" id="Dark" value="Chiste Negro" className="categorias__button" />
        <input type="button" id="Pun" value="Actualidad" className="categorias__button" />
        <input type="button" id="Spooky" value="Terror" className="categorias__button" />
        <input type="button" id="Christmas" value="Navidad" className="categorias__button" />
      </div>
      <div className="categorias__inputs">
        <div className="categorias__numChistes">
          <label htmlFor="selectChiste">Quieres chistes cortos o largos?</label>
           {/* capturamos el valor del elemento que desencadena el evento onClick, con el propósito de 
      llamar a la función categoryChange y pasárselo como prop para que realice el fethc con esas características */}
          <select name="select" id="selectChiste" onChange={(event) => categoryLengthChange(event.target.value)} className="categorias__select">
            <option value="Cualquiera">Me da igual</option>
            <option value="single">Cortos</option>
            <option value="twopart">Largos</option>
          </select>
        </div>
        <div className="categorias__numChistes">
          <label htmlFor="numChistes">Cuantos chistes quieres ver?:</label>
          <input type="number" id="numChistes" min="1" max="5" className="categorias__numChistes--input" onChange={(event) => categoryAmountChange(event.target.value)} />
        </div>
      </div>
    </section>
  );
}

export default Categorias;
