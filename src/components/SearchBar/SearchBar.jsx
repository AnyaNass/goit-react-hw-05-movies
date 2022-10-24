import { useState, useEffect } from "react";
import { useParams, useLocation, useSearchParams } from "react-router-dom"
import { searchMovie } from "servises/searchMovie";
import ErrorMessage from "components/ErrorMessage/ErrorMessage";
import { Loader } from "components/Loader/Loader";
import { Form, Input, Submit } from "./SearchBar.styled";
import { FaLongArrowAltRight } from 'react-icons/fa';
import { MoviesList } from "components/MoviesList/MoviesList";
import { Section } from "components/Section/Section";
import { Container } from "components/Container/Container";

export const SearchBar = () => {
	const [movies, setMovies] = useState([]);
	const [error, setError] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	const [searchParams, setSearchParams] = useSearchParams();
	const searchQuery = searchParams.get('query') ?? "";

	const { id } = useParams();
	const location = useLocation();

	useEffect(() => {
		document.querySelector('[href="/movies"]').addEventListener('click', onClick)

		return () => {
			document.querySelector('[href="/movies"]').removeEventListener('click', onClick)
		}
	}, [])

	const onClick = () => {
		setMovies([])
		setError(false)
	}

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
		setSearchParams(e.target.value !== "" ? { query: e.target.value } : {});
	}

	if (id) {
		return;
	}

	return <Section>
		<Container>
			{<Form onSubmit={handleSubmit}>
				<Input type="text" value={searchQuery} onChange={inputChange} placeholder="Search movie" />
				<Submit type="submit"><FaLongArrowAltRight /></Submit>
			</Form>}
			{movies.length > 0 && !id && <MoviesList movies={movies} location={location} />}
			{isLoading && <Loader />}
			{error && <ErrorMessage text="Sorry, we didn`t find anything" />}
		</Container>
	</Section>
}	