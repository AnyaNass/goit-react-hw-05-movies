import { Outlet } from "react-router-dom"
import { Container } from "components/Container/Container";
import { SearchBar } from "components/SearchBar/SearchBar";

export const Movies = () => {
	return (
		<main>
			<Container>
				<SearchBar />
				<Outlet />
			</Container>
		</main>
	)
}