import { useParams, useSearchParams } from "react-router-dom"
import { Form, Input, Submit } from "./SearchBar.styled";
import { FaLongArrowAltRight } from 'react-icons/fa';
import { Section } from "components/Section/Section";
import { Container } from "components/Container/Container";

export const SearchBar = ({ getMovies, clear }) => {
	const [searchParams, setSearchParams] = useSearchParams();
	const searchQuery = searchParams.get('query') ?? "";

	const { id } = useParams();

	const handleSubmit = e => {
		e.preventDefault();

		if (searchQuery === '') {
			return;
		}
		getMovies(searchQuery);
	}

	const inputChange = e => {
		setSearchParams(e.target.value !== "" ? { query: e.target.value } : {});
	}

	return <>{!id && (<Section>
		<Container>
			<Form onSubmit={handleSubmit}>
				<Input type="text" value={searchQuery} onChange={inputChange} placeholder="Search movie" />
				<Submit type="submit"><FaLongArrowAltRight /></Submit>
			</Form>
		</Container>
	</Section>)}
	</>
}	