import { useParams, Link, Outlet, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMovieDetails } from "servises/getMovieDetails";


export const MovieDetails = () => {
	const [info, setInfo] = useState();
	const { id } = useParams();
	const navigate = useNavigate();
	const location = useLocation();

	useEffect(() => {
		getMovieDetails(id).then(resp => setInfo(resp))
	}, [id])

	if (!info) {
		return
	}

	return <>
		<button type="button" onClick={() => navigate(location?.state?.from ?? '/')}>Go back</button>
		<img src={`https://image.tmdb.org/t/p/w500${info.poster_path}`}
			alt={info.original_title} />
		<h2>{info.original_title}</h2>
		<p>User score {info.vote_average}</p>
		<h3>Overview</h3>
		<p>{info.overview}</p>
		<h3>Genres</h3>
		<ul>
			{info.genres.map(genre => <li key={genre.id}>{genre.name}</li>)}
		</ul>
		<ul>
			<li>
				<Link to={"actors"}>Cast</Link>
			</li>
			<li>
				<Link to={"reviews"}>Reviews</Link>
			</li>
		</ul>
		<Outlet />
	</>
}