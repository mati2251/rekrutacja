const pokemonsContainer = document.querySelector('.pokemons');

function renderPokemons(pokemons) {
  pokemonsContainer.innerHTML = '';
  pokemons.forEach((pokemon) => {
    pokemonsContainer.innerHTML += `<pokemon-element name="${ pokemon.name }" image="${ pokemon.image }"></pokemon-element>`
  })
}

renderPokemons(pokemons);

const form = document.querySelector('form');

function filterPokemons(pokemons) {
  const pokemonsByType = filterPokemonsByType(pokemons)
  const pokemonsByName = filterPokemonsByName(pokemons)
  return pokemonsByType.filter((pokemon) => {
    if( pokemonsByName.includes(pokemon)){
      return pokemon
    }
  })
}

function getTypesFromForm() {
  const types = [];
  for (const input of form.elements) {
    if (input.type === 'checkbox') {
      if (input.checked) {
        types.push(input.id)
      }
    }
  }
  return types;
}

function filterPokemonsByType(pokemons) {
  const types = getTypesFromForm()
  return pokemons.filter((pokemon) => {
    let pokemonIsValid = false;
    types.forEach((type => {
      if (pokemon.types.includes(type)) {
        pokemonIsValid = true;
      }
    }))
    if (pokemonIsValid) {
      return pokemon
    }
  })
}

function getKeywordFromForm() {
  const searchBar = document.getElementById('pokemon-name')
  return searchBar.value;
}

function filterPokemonsByName(pokemons) {
  const keyword = getKeywordFromForm()
  if (keyword === '') {
    return pokemons
  }
  return pokemons.filter((pokemon) => {
    if (pokemon.name.includes(keyword)) {
      return pokemon
    }
  })
}


function submitForm(event) {
  event.preventDefault();
  renderPokemons(filterPokemons(pokemons));
}

form.addEventListener('submit', submitForm);

/*
  3. Pokedex powinien wyglądać trochę lepiej, niż ten tutaj. W folderze znajdziesz plik style.css, w którym możesz ulepszyć wygląd naszego pokedexa
  Liczymy na Twoją kreatywność 😉
*/
