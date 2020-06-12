import axios from 'axios';

const RANDOM_POKEMON = 'RANDOM_POKEMON'
const BULBASAUR = 'BULBASAUR'
const SQUIRTLE = 'SQUIRTLE'
const CHARMANDER =  'CHARMANDER'

export const setPokemon = (pokemon) => ({
  type: RANDOM_POKEMON,
  pokemon
})

export const setBulbasaur = (bulbasaur) => ({
  type: BULBASAUR,
  bulbasaur
})

export const setSquirtle = (squirtle) => ({
  type: SQUIRTLE,
  squirtle
})

export const setCharmander = (charmander) => ({
  type: CHARMANDER,
  charmander
})


export const fetchPokemon = (id) => {
  return (dispatch) => {
     return axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(function (response) {
      if (response.data.name === "bulbasaur") {
        let action = setBulbasaur(response.data)
        dispatch(action)
      } else if (response.data.name === "squirtle") {
          let action = setSquirtle(response.data)
          dispatch(action)
      } else if (response.data.name === "charmander") {
        let action = setCharmander(response.data)
        dispatch(action)
    } else {
        let action = setPokemon(response.data)
        dispatch(action)
      }
    })
  }
};

let defaultState = {
  bulbasaur : {},
  squirtle : {},
  charmander : {},
  random : {}
}

export const pokemonReducer = (state = defaultState, action) => {
  switch (action.type) {
    case RANDOM_POKEMON:
      return Object.assign({}, state, {
        random: action.pokemon
      })
    case BULBASAUR:
      return Object.assign({}, state, {
        bulbasaur: action.bulbasaur
      })
      case SQUIRTLE:
      return Object.assign({}, state, {
        squirtle: action.squirtle
      })
      case CHARMANDER:
      return Object.assign({}, state, {
        charmander: action.charmander
      })

    default:
      return state
  }
}
