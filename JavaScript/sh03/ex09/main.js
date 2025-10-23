function mergeUser(base,patch) {
	
	const merged = {
		...base, 
		...patch,
		preferences: {
			...base.preferences,
			...patch.preferences,
			theme:  patch.preferences?.theme ?? base.preferences?.theme
		}
	}
	return merged
}

const base = { username: 'mario ferrer', age: 28, preferences: { theme: 'light', language: "es" } };
const patch = { username: 'mario gracos', preferences: {  language: "en" } };

console.log(mergeUser(base, patch));