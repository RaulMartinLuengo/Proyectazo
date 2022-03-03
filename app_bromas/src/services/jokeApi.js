const URL_JOKEAPI = 'https://v2.jokeapi.dev/joke/Any';

// función que devuelve todos los pokemons de la API
// eslint-disable-next-line import/prefer-default-export
export async function getJokes() {
  const data = await fetch(URL_JOKEAPI);
  const jokes = await data.json();

  return jokes.results;
}
