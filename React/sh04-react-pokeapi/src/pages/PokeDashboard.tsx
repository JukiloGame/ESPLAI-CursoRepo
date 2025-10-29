import { useState, useEffect } from 'react'
import PokeCard from '../components/PokeCard'
import '../style.css'
import type { Pokemon, Page } from '../types'
import { useFilteredPokemons } from "../hooks/useFilteredPokemons";



function PokeDashboard() {
	const [pokemons, setPokemons] = useState<Pokemon[]>([]);
	//const [page, setPage] = useState<Page>();
	const [pageOffset, setPageOffset] = useState<number>(0);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const limit = 21;

	useEffect(() => {
		const controller = new AbortController();
		const signal = controller.signal;

		async function fetchPokemons() {
		let details: any[] = [];
		setIsLoading(true);

		try {
			const res = await fetch(
				`https://pokeapi.co/api/v2/pokemon/?offset=${pageOffset}&limit=${limit}/`,
				{ signal }
				);

			if (!res.ok) throw new Error ("Data not found")
			const data : Page = await res.json();
			//setPage(data);

			details = await Promise.all(
				data.results.map(async (p: any) => {
					const res = await fetch(p.url, { signal }) ;
					return await res.json();
				})
			);
			setPokemons(details);
			} catch (error : any) {
				if (error.name === "AbortError") {
					console.log("Fetch aborted")
				} else {
					console.error(error)
				} 
			} finally {
				setIsLoading(false);
			} 
		}
		fetchPokemons();

		return () => {
			controller.abort();
		};
	},[pageOffset]);
	const { filtered, filterText, setFilterText } = useFilteredPokemons(pokemons);

	return (
		<>
		<nav className="pokemonPaging"> 
			{<button disabled={pageOffset <= 0} onClick={() => setPageOffset(pageOffset - limit)}>Anterior</button>}
			<button onClick={() => setPageOffset(pageOffset + limit)}>Siguiente</button>
		</nav>
		<section className="pokemonDashboard"> 
		<div className="pokemonDashboard__filter">
			<input
			value={filterText}
			onChange={(e) => setFilterText(e.target.value)}
			id="pokemonFilter" type="text" placeholder="Filtrar pokemons por nombre..."
			/>
		</div>

		{filtered.map(({id, name, types, sprites}) => ( 
			<PokeCard 
				id={id} 
				name={name}
				types={types.map((t: any) => t.type.name)} 
				img={sprites.front_default} 
			/>) )}
		</section>
		<nav className="pokemonPaging"> 
			{<button disabled={pageOffset <= 0} onClick={() => setPageOffset(pageOffset - limit)}>Anterior</button>}
			<button onClick={() => setPageOffset(pageOffset + limit)}>Siguiente</button>
		</nav>
		</>

		
	)
}

export default PokeDashboard
