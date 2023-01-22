import React, { useEffect, useState} from 'react'
import './App.css';
import pokemon from './pokemon.json'
import PropsType from "props-type"
import PokemonInfo from './components/PokemonInfo/PokemonInfo'
import PokemonSearch from './components/PokemonSearch/PokemonSearch'
import PokemonTable from './components/PokemonTable/PokemonTable'

const PokemonType = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.shape({
    english: PropTypes.string.isRequired,
    japanese: PropTypes.string.isRequired,
    chinese: PropTypes.string.isRequired,
    french: PropTypes.string.isRequired,

  }),
  type: PropTypes.arrayOf(PropTypes.string.isRequired),
  base: PropTypes.shape({
    hp: PropTypes.number.isRequired,
    attack: PropTypes.number.isRequired,
    defense: PropTypes.number.isRequired,
    special_attack: PropTypes.number.isRequired,
    special_defense: PropTypes.number.isRequired,
    speed: PropTypes.number.isRequired,
  })


})

const PokemonRow= ({pokemon}) => {
  
  return (
    <tr>
    <td>{pokemon.name.english}</td>
    <td>{pokemon.type.join(",")}</td>
    <td><button onclick={()=>{console.log()}}>More Information</button></td> 
    </tr>

  )
}
 PokemonRow.propsTypes = {
  pokemon: PokemonType
 }


function App() {

  const [filter, setFilter] = useState('')

  console.log(filter)

  const searchPokemon = (event)=>{
    setFilter(event.target.value)
  }

  return (
    <div style={{
      margin: 'auto',
      width: 800,
      padding: 'len'
    }}>
    
      <h1 className='title'>Pokemon search</h1>
      <div style={{
        display: 'grid',
        gridTemplateColumn: "80% 20%",
        gridColumnGap: '1rem'
      }}
      >
      <div>
        <input 
        type='text'
        value={filter}
        onChange={searchPokemon}
        />

      <table width="100%">
        <thead>
          <tr>
            <th>name</th>
            <th>type</th>

          </tr>
        </thead>
<tbody>
{pokemon.filter((pokemon) => pokemon.name.english.toLowerCase().includes(filter.toLowerCase())).slice(0, 20).map((pokemon) => (
                <PokemonRow key={pokemon.id} pokemon={pokemon} />
)
)}
</tbody>
      </table>
      </div>
    </div>

    </div>
  )
}



export default App;
