import { useState } from "react";
import { Outlet, useParams, Link, useLocation } from "react-router-dom"
import { searchMovie } from "servises/searchMovie";
import { ErrorMessage } from "components/ErrorMessage/ErrorMessage";
import { Loader } from "components/Loader/Loader";

export const Movies = () => {
	const [query, setQuery] = useState('');
	const [movies, setMovies] = useState([]);
	const [error, setError] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	const { id } = useParams();
	const location = useLocation();

	const handleSubmit = async e => {
		e.preventDefault();

		setIsLoading(true);
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

		setQuery('');
	}

	const inputChange = e => {
		setQuery(e.target.value)
	}

	return (
		<>
			{!id && <form onSubmit={handleSubmit}>
				<input type="text" value={query} onChange={inputChange} />
				<button type="submit">Submit</button>
			</form>}
			{movies && !id && <ul>
				{movies.map(({ id, title }) => <li key={id}>
					<Link to={`${id}`} state={{ from: location }}>{title}</Link>
				</li>)}
			</ul>}
			{isLoading && <Loader />}
			{error && <ErrorMessage />}
			<Outlet />
		</>
	)
}