const URL_JOKEAPI = 'https://v2.jokeapi.dev/joke';

// función que devuelve todos los pokemons de la API
// eslint-disable-next-line import/prefer-default-export
export async function getAnyJoke() {
  const data = await fetch(URL_JOKEAPI.concat('/any'));
  const joke = await data.json();

  return joke;
}
// Se devuelve un chiste aleatorio de una categoría concreta.
export async function getCategoryJoke(category) {
  const data = await fetch(URL_JOKEAPI.concat(`/${category}`));
  const joke = await data.json();

  return joke;
}
// Se devuelve un array de objetos con chistes de una misma categoría.
export async function getCategoryAmountJoke(category, amount) {
  const data = await fetch(URL_JOKEAPI.concat(`/${category}?amount=${amount}`));
  const joke = await data.json();

  return joke;
}
// Se devuelve un chiste de una longitud(Una frase o dos) concreta de una categoría concreta.
export async function getCategoryLengthJoke(category, length) {
  const data = await fetch(URL_JOKEAPI.concat(`/${category}?type=${length}`));
  const joke = await data.json();

  return joke;
}
// Se devuelve un array de chistes de una longitud(Una frase o dos) concreta de
// una categoría concreta.
export async function getCategoryLengthAmountJoke(category, length, amount) {
  const data = await fetch(URL_JOKEAPI.concat(`/${category}?type=${length}&amount=${amount}`));
  const joke = await data.json();

  return joke;
}
// Se devuelve un array de chistes aleatorios.
export async function getAmountJoke(amount) {
  const data = await fetch(URL_JOKEAPI.concat(`/any?amount=${amount}`));
  const joke = await data.json();

  return joke;
}
// Se devuelve un chiste aleatorio que cuyas "flags" sean true
export async function getFlagsJoke(flags) {
  const data = await fetch(URL_JOKEAPI.concat(`/any?blacklistFlags=${flags}`));
  const joke = await data.json();

  return joke;
}
// Se devuelve un chiste aleatorio en un idioma concreto
export async function getLangJoke(lang) {
  const data = await fetch(URL_JOKEAPI.concat(`/any?lang=${lang}`));
  const joke = await data.json();

  return joke;
}
// Se devuelve un array de chistes aleatorio en un idioma concreto
export async function getLangAmountJoke(lang, amount) {
  const data = await fetch(URL_JOKEAPI.concat(`/any?lang=${lang}&amount=${amount}`));
  const joke = await data.json();

  return joke;
}
// Se devuelve un chiste aleatorio que contenga la palabra que se pase
export async function getFilterJoke(filter) {
  const data = await fetch(URL_JOKEAPI.concat(`/any?contains=${filter}`));
  const joke = await data.json();

  return joke;
}
