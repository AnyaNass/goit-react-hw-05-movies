import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { getActors } from "servises/getActors"
import { ActorsList, Actor, Img, Description, Character } from "./Actors.styled"
import { Loader } from "components/Loader/Loader"
import ErrorMessage from "components/ErrorMessage/ErrorMessage"
import { checkImage } from '../../helpers/checkImage'

const Actors = () => {
	const [actors, setActors] = useState();
	const [error, setError] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	const { id } = useParams();

	useEffect(() => {
		setIsLoading(true);

		async function fetch() {
			try {
				const response = await getActors(id);
				setActors(response.cast)

				if (response.cast.length === 0) {
					throw new Error();
				}
			} catch {
				setError(true)
			} finally {
				setIsLoading(false);
			}
		}

		fetch()
	}, [id])

	if (!actors) {
		return;
	}

	return (<>
		<ActorsList>
			{actors.map(({ id, name, character, profile_path }) => <Actor key={id} >
				<Img src={checkImage(profile_path)} alt={name} />
				<Description>
					<h2>{name}</h2>
					<Character><span>Character: </span>{character ? character : "No information"}</Character>
				</Description>
			</Actor>)}
		</ActorsList>
		{isLoading && <Loader />}
		{error && <ErrorMessage text="Sorry, there aren`t any actors" />}
	</>
	)
}

export default Actors