import PokeCard from '../components/PokeCard'
import '../style.css'

function PokeDashboard() {
  return (
    <>
	<section className="pokemonDashboard"> 
	<div className="pokemonDashboard__filter">
			<input id="pokemonFilter" type="text" placeholder="Filtrar pokemons por nombre..."/>
	</div>
	<PokeCard id={1} name="Bulbasaur" types={["Grass", "Poison"]} img="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" />
	<PokeCard id={1} name="Bulbasaur" types={["Grass", "Poison"]} img="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" />
	<PokeCard id={1} name="Bulbasaur" types={["Grass", "Poison"]} img="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" />
	<PokeCard id={1} name="Bulbasaur" types={["Grass", "Poison"]} img="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" />
	<PokeCard id={1} name="Bulbasaur" types={["Grass", "Poison"]} img="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" />
	<PokeCard id={1} name="Bulbasaur" types={["Grass", "Poison"]} img="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" />
	<PokeCard id={1} name="Bulbasaur" types={["Grass", "Poison"]} img="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" />
	<PokeCard id={1} name="Bulbasaur" types={["Grass", "Poison"]} img="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" />
	</section>
    </>
  )
}

export default PokeDashboard
