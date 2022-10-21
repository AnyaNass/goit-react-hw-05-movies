import { useState } from "react";
import { Outlet, useParams, useLocation, useSearchParams } from "react-router-dom"
import { searchMovie } from "servises/searchMovie";
import { ErrorMessage } from "components/ErrorMessage/ErrorMessage";
import { Loader } from "components/Loader/Loader";
import { Container } from "components/Container/Container";
import { Form, Input, Submit, MoviesList, MoviesListItem, Img, Description, MovieTitle, LinkToDetails } from "./Movies.styled";
import { FaLongArrowAltRight } from 'react-icons/fa';

export const Movies = () => {
	const [movies, setMovies] = useState([]);
	const [error, setError] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [searchParams, setSearchParams] = useSearchParams();
	const searchQuery = searchParams.get('query') ?? "";

	const { id } = useParams();
	const location = useLocation();

	useState(() => {
		if (searchQuery === '') {
			return;
		}

		setIsLoading(true);

		async function fetch() {
			try {
				const response = await searchMovie(searchQuery);
				setMovies(response.results);

				if (response.results.length === 0) {
					throw new Error();
				}
			} catch {
				setError(true)
			} finally {
				setIsLoading(false);
			}
		}

		fetch()
	}, [])

	const handleSubmit = async e => {
		e.preventDefault();

		if (searchQuery === '') {
			return;
		}

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

	const checkImage = (img) => {
		if (img) {
			return `https://image.tmdb.org/t/p/w500${img}`
		}
		if (!img) {
			return "https://scalar.usc.edu/works/guide/media/gradient.jpg"
		}
	}

	return (
		<main>
			<Container>
				{!id && <Form onSubmit={handleSubmit}>
					<Input type="text" value={searchQuery} onChange={inputChange} placeholder="Search movie" />
					<Submit type="submit"><FaLongArrowAltRight /></Submit>
				</Form>}
				{movies.length > 0 && !id && <MoviesList>
					{movies.map(({ id, title, poster_path }) => <MoviesListItem key={id}>
						<LinkToDetails to={`${id}`} state={{ from: location }}>
							<Img src={checkImage(poster_path)} alt={title} />
							<Description>
								<MovieTitle>{title}</MovieTitle>
							</Description>
						</LinkToDetails>
					</MoviesListItem>)}
				</MoviesList>}
				{isLoading && <Loader />}
				{error && <ErrorMessage text="Sorry, we didn`t find anything" />}
				<Outlet />
			</Container>
		</main>
	)
}