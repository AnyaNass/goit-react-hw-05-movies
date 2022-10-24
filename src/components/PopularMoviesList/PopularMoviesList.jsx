import { useEffect, useState } from "react"
import { getPopularMovies } from '../../servises/getPopularMovies'
import { Loader } from "components/Loader/Loader";
import ErrorMessage from "components/ErrorMessage/ErrorMessage";
import { MoviesList } from "components/MoviesList/MoviesList";
import { Section } from "components/Section/Section";
import { Container } from "components/Container/Container";

export const PopularMoviesList = () => {
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

	return <Section>
		<Container>
			<MoviesList movies={popularMovies} toDetailsPath={'movies/'} />
			{isLoading && <Loader />}
			{error && <ErrorMessage text="Sorry, something went wrong" />}
		</Container>
	</Section>
}