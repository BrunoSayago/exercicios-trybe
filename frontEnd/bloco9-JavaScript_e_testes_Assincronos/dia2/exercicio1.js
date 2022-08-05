const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  fetch(API_URL, { headers: { Accept: 'application/json' } })
    .then(response => response.json())
    .then(data => {
      const lugarPiada = document.getElementById('jokeContainer');
      lugarPiada.innerText = data.joke
    });
}

window.onload = () => fetchJoke();