import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { getPopularMovies } from '../../servises/getPopularMovies'

export const HomePage = () => {
	const [popularMovies, setPopularMovies] = useState([]);

	useEffect(() => {
		getPopularMovies().then(resp => setPopularMovies(resp.results));
	}, [])

	return <main>
		<ul>
			{popularMovies.map(({ id, original_title }) => <li key={id}>
				<Link to={`movies/${id}`} >{original_title}</Link>
			</li>)}
		</ul>
	</main >
}