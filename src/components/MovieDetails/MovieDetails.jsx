import { useParams, Outlet, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Container } from "components/Container/Container";
import { getMovieDetails } from "servises/getMovieDetails";
import { BackBtn, ExtraInfoLink, MovieCard, Img, MovieTitle, Score, Subtitle, Overview, GenresList, Description, ExtraInfoList } from "./MovieDetails.styled";
import { FaLongArrowAltLeft } from 'react-icons/fa';
import { Section } from "components/Section/Section";

import { Suspense } from "react"

const MovieDetails = () => {
	const [info, setInfo] = useState();
	const { id } = useParams();
	const navigate = useNavigate();
	const location = useLocation();

	useEffect(() => {
		getMovieDetails(id).then(resp => setInfo(resp))
	}, [id])

	if (!info) {
		return;
	}

	return <Section>
		<Container>
			<MovieCard>
				<BackBtn type="button" onClick={() => navigate(location?.state?.from ?? '/')}><FaLongArrowAltLeft /></BackBtn>
				<div>
					<Img src={`https://image.tmdb.org/t/p/w500${info.poster_path}`}
						alt={info.original_title} width="400" />
					<ExtraInfoList>
						<li>
							<ExtraInfoLink to={"actors"} state={{ from: location?.state?.from }}>Cast</ExtraInfoLink>
						</li>
						<li>
							<ExtraInfoLink to={"reviews"} state={{ from: location?.state?.from }}>Reviews</ExtraInfoLink>
						</li>
					</ExtraInfoList>
				</div>
				<Description>
					<MovieTitle>{info.title}</MovieTitle>
					<Score><span>User score</span> {Math.round(info.vote_average)}</Score>
					<Subtitle>Overview</Subtitle>
					<Overview>{info.overview}</Overview>
					<Subtitle>Genres</Subtitle>
					<GenresList>
						{info.genres.map(genre => <li key={genre.id}>{genre.name}</li>)}
					</GenresList>
				</Description>
			</MovieCard>
			<Suspense>
				<Outlet />
			</Suspense>
		</Container>
	</Section>
}

export default MovieDetails