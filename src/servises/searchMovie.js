const API_KEY = '0b80d585dab8262100dc7063d058640e'

export const searchMovie = async query => {
	const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`)
	const result = response.json();
	return result;
}