const API_KEY = '0b80d585dab8262100dc7063d058640e'

export const getActors = async id => {
	const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}`)
	const result = response.json();
	return result;
}


