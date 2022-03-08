/* eslint-disable import/prefer-default-export */
const URL_JOKEAPI = 'https://v2.jokeapi.dev/joke';

export async function getCategoryJoke(category) {
  const data = await fetch(URL_JOKEAPI.concat(`/${category}`));
  const joke = await data.json();

  return joke;
}

export default getCategoryJoke;
