import { useState, useMemo } from "react";
import type { Pokemon } from '../types'

export function useFilteredPokemons(pokemons: Pokemon[]) {
	const [filterText, setFilterText] = useState("");

	const filtered = useMemo(() => {
		return pokemons.filter( p => 
		p.name.toLowerCase().includes(filterText.toLowerCase())
		);
	}, [pokemons, filterText]);

	return { filtered, filterText, setFilterText}
}
