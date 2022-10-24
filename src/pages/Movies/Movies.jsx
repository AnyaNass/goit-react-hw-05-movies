import { Outlet } from "react-router-dom"
import { SearchBar } from "components/SearchBar/SearchBar";

const Movies = () => {
	return (
		<main>
			<SearchBar />
			<Outlet />
		</main>
	)
}

export default Movies