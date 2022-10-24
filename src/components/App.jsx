import { lazy } from "react";
import { Routes, Route } from "react-router-dom";

const HomePage = lazy(() => import("pages/HomePage/HomePage"))
const Layout = lazy(() => import("./Layout/Layout"))
const MovieDetails = lazy(() => import("./MovieDetails/MovieDetails"))
const Movies = lazy(() => import("pages/Movies/Movies"))
const Actors = lazy(() => import("./Actors/Actors"))
const Reviews = lazy(() => import("./Reviews/Reviews"))
const ErrorMessage = lazy(() => import("./ErrorMessage/ErrorMessage"))

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
			<Route path="*" element={<ErrorMessage text="Page isn't found" />} />
		</Route>
	</Routes>
};

