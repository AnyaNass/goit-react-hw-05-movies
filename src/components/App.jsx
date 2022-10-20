import { Routes, Route } from "react-router-dom";
import { HomePage } from "pages/HomePage/HomePage";
import { Layout } from "./Layout/Layout";
import { MovieDetails } from "./MovieDetails/MovieDetails"
import { Movies } from "pages/Movies/Movies";
import { Actors } from "./Actors/Actors";
import { Reviews } from "./Reviews/Reviews";

export const App = () => {
	return <Routes>
		<Route path="/" element={<Layout />}>
			<Route index element={<HomePage />} />
			<Route path="movies" element={<Movies />}>
				<Route path=":id" element={<MovieDetails />} >
					<Route path="actors" element={<Actors />} />
					<Route path="reviews" element={<Reviews />} />
				</Route>
			</Route>
		</Route>
	</Routes>
};

