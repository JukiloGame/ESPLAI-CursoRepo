import '../style.css'

interface PokeCardProps {
	id: number
	name: string
	types: string[]
	img: string
}

function PokeCard({id, name, types, img}: PokeCardProps) {
	return (
		<>
		<div className="pokemonDashboard__item"> 
			<div className="pokemonCard__portrait"> 
				<p > ID / {id} </p>
				<img src={img} alt="pokemon"/>
			</div>
			<div className="pokemonCard__info"> 
				<p className="pokemonCard__info-name"> {name} </p>
				<div>
					<p className="pokemonCard__info-type"> {types[0] !== undefined && types[0]} </p>
					<p className="pokemonCard__info-type"> {types[1] !== undefined && types[1]} </p>
				</div>
				<blockquote> 
					<p className="evolution__title"> Evoluciona de: </p>
					<p> bulbasaur </p>
				</blockquote>
			</div>
		</div>
		</>
	)
}

export default PokeCard

