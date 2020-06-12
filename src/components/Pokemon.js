import React from 'react';
import { connect } from 'react-redux'
import { fetchPokemon } from '../reducers/fetchPokemon';
import { Container, Row, Col } from 'react-bootstrap'
import '../App.css'

class Pokemon extends React.Component {

  constructor(props) {
    super(props);
    this.randomPokemon = this.randomPokemon.bind(this);
  }


   randomPokemon() {
    let randomNum = Math.floor(Math.random() * 152) + 1;
    this.props.fetchRandom(randomNum)
  }

  componentDidMount(){
    this.props.fetchSquirtle(7)
    this.props.fetchBulbasaur(1)
    this.props.fetchCharmander(4)
    this.props.fetchRandom(Math.floor(Math.random() * 152) + 1)
  }


  render(){
    const random = this.props.random
    const squirtle = this.props.squirtle
    const bulbasaur = this.props.bulbasaur
    const charmander = this.props.charmander
    if (!bulbasaur) {
      return (
        <div>
          <h2>No Pokemon</h2>
        </div>
      )
    } else {
    return (
      <Container>
        <div className="pokemon">
            <h2>STARTERS</h2>
          <Row>
              <Col>
              {bulbasaur.sprites ? (
                  <img src={bulbasaur.sprites.front_default} alt={bulbasaur.name} />
                  ) : (
                    null
                  )
                }
                <h3>{bulbasaur.name}</h3>
                <p>Height: {bulbasaur.height}ft</p>
                <p>Weight: {bulbasaur.weight}lbs</p>
                <p>Experience: {bulbasaur.base_experience}</p>
              </Col>
              <Col>
              {squirtle.sprites ? (
                  <img src={squirtle.sprites.front_default} alt={squirtle.name} />
                  ) : (
                    null
                  )
                }
                <h3>{squirtle.name}</h3>
                <p>Height: {squirtle.height}ft</p>
                <p>Weight: {squirtle.weight}lbs</p>
                <p>Experience: {squirtle.base_experience}</p>
              </Col>
              <Col>
              {charmander.sprites ? (
                  <img src={charmander.sprites.front_default} alt={charmander.name} />
                  ) : (
                    null
                  )
                }
                <h3>{charmander.name}</h3>
                <p>Height: {charmander.height}ft</p>
                <p>Weight: {charmander.weight}lbs</p>
                <p>Experience: {charmander.base_experience}</p>
              </Col>
          </Row>
        <div className="random">
          <h2>RANDOM</h2>
          {random.sprites ? (
                  <img src={random.sprites.front_default} alt={random.name} />
                  ) : (
                    null
                  )
                }
            <h3>{random.name}</h3>
            <p>Height: {random.height}ft</p>
            <p>Weight: {random.weight}lbs</p>
            <p>Experience: {random.base_experience}</p>
            <button onClick={() => this.randomPokemon()}> random pokemon button</button>
        </div>
    </div>
    </Container>
    )}
    }
  }

const mapStateToProps = (state) => {
  return {
    random: state.random,
    squirtle: state.squirtle,
    bulbasaur: state.bulbasaur,
    charmander: state.charmander
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchRandom: (id) => dispatch(fetchPokemon(id)),
    fetchSquirtle: (id) => dispatch(fetchPokemon(id)),
    fetchBulbasaur: (id) => dispatch(fetchPokemon(id)),
    fetchCharmander: (id) => dispatch(fetchPokemon(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Pokemon)
