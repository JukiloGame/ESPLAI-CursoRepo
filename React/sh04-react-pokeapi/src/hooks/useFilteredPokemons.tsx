import { useState, useMemo } from "react";
import type { Page } from '../types'

export function useFilteredPokemons(pokemons: Page) {
	const [filterText, setFilterText] = useState("");

	const filtered = useMemo(() => {
		return pokemons.results.map(p => p).filter( n => 
		n.name.toLowerCase().includes(filterText.toLowerCase())
		);
	}, [pokemons, filterText]);

	return { filtered, filterText, setFilterText}
}
