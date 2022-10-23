import { useState, useEffect } from "react";
import { useParams, useLocation, useSearchParams } from "react-router-dom"
import { searchMovie } from "servises/searchMovie";
import { ErrorMessage } from "components/ErrorMessage/ErrorMessage";
import { Loader } from "components/Loader/Loader";
import { Form, Input, Submit } from "./SearchBar.styled";
import { FaLongArrowAltRight } from 'react-icons/fa';
import { MoviesList } from "components/MoviesList/MoviesList";

export const SearchBar = () => {
	const [movies, setMovies] = useState([]);
	const [error, setError] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [searchParams, setSearchParams] = useSearchParams();
	const searchQuery = searchParams.get('query') ?? "";

	const { id } = useParams();
	const location = useLocation();

	// useEffect(() => {
	// 	if (searchQuery === '') {
	// 		return;
	// 	}

	// 	setIsLoading(true);

	// 	async function fetch() {
	// 		try {
	// 			const response = await searchMovie(searchQuery);
	// 			setMovies(response.results);

	// 			if (response.results.length === 0) {
	// 				throw new Error();
	// 			}
	// 		} catch {
	// 			setError(true)
	// 		} finally {
	// 			setIsLoading(false);
	// 		}
	// 	}

	// 	fetch()
	// }, [searchQuery])

	useEffect(() => {
		const moviesLink = document.querySelector('[href="/movies"]');

		moviesLink.addEventListener('click', () => {
			setMovies([])
		})

		return () => {
			moviesLink.removeEventListener('click', () => {
				setMovies([])
			})
		}
	}, [])

	const handleSubmit = async e => {
		e.preventDefault();

		if (searchQuery === '') {
			return;
		}

		setError(false);
		setIsLoading(true);

		try {
			const response = await searchMovie(searchQuery);
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

	const inputChange = e => {
		setSearchParams(e.target.value !== "" ? { query: e.target.value } : {})
	}

	return <>
		{!id && <Form onSubmit={handleSubmit}>
			<Input type="text" value={searchQuery} onChange={inputChange} placeholder="Search movie" />
			<Submit type="submit"><FaLongArrowAltRight /></Submit>
		</Form>}
		{movies.length > 0 && !id && <MoviesList movies={movies} location={location} />}
		{isLoading && <Loader />}
		{error && <ErrorMessage text="Sorry, we didn`t find anything" />}
	</>
}	