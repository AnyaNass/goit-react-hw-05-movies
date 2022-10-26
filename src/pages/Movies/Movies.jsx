import { useState } from "react";
import { Outlet, useParams, useLocation } from "react-router-dom"
import { SearchBar } from "components/SearchBar/SearchBar";
import { searchMovie } from "servises/searchMovie";
import ErrorMessage from "components/ErrorMessage/ErrorMessage";
import { Loader } from "components/Loader/Loader";
import { MoviesList } from "components/MoviesList/MoviesList";

const Movies = () => {
	const [movies, setMovies] = useState([]);
	const [error, setError] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	const { id } = useParams();
	const location = useLocation();

	const getMovies = async query => {
		try {
			const response = await searchMovie(query);
			setMovies(response.results);

			if (response.results.length === 0) {
				throw new Error();
			}

		} catch {
			setError(true)
		} finally {
			setIsLoading(false)
		}
	}

	return (
		<main>
			<SearchBar getMovies={getMovies} />
			<Outlet />
			{movies.length > 0 && !id && <MoviesList movies={movies} location={location} />}
			{isLoading && <Loader />}
			{error && <ErrorMessage text="Sorry, we didn`t find anything" />}
		</main>
	)
}

export default Movies;