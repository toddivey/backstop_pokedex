import { combineReducers } from 'redux'
import { pokemonReducer } from './fetchPokemon'

// This reducer is just a stub. We should probably do something
// with that combineReducers thing up there...
//export * from './fetchPokemon'


export default combineReducers({
  pokemon : pokemonReducer
})


