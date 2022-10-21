import { useEffect, useState } from "react"
import { getPopularMovies } from '../../servises/getPopularMovies'
import { Container } from "components/Container/Container";
import { PopularMoviesList, MovieTitle, Img, LinkToDetails, Description, MoviesListItem } from "./HomePage.styled";
import { Loader } from "components/Loader/Loader";
import { ErrorMessage } from "components/ErrorMessage/ErrorMessage";

export const HomePage = () => {
	const [popularMovies, setPopularMovies] = useState([]);
	const [error, setError] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);

		async function fetch() {
			try {
				const response = await getPopularMovies();
				setPopularMovies(response.results)

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

	if (!popularMovies) {
		return;
	}

	return <main>
		<Container>
			<PopularMoviesList>
				{popularMovies.map(({ id, title, poster_path }) => <MoviesListItem key={id}>
					<LinkToDetails to={`movies/${id}`} >
						<Img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} width="300" />
						<Description>
							<MovieTitle>{title}</MovieTitle>
						</Description>
					</LinkToDetails>
				</MoviesListItem>)}
			</PopularMoviesList>
			{isLoading && <Loader />}
			{error && <ErrorMessage text="Sorry, something went wrong" />}
		</Container>
	</main >
}