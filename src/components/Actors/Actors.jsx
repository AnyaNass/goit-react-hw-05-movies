import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { getActors } from "servises/getActors"

export const Actors = () => {
	const [actors, setActors] = useState();

	const { id } = useParams();

	useEffect(() => {
		getActors(id).then(resp => setActors(resp.cast))
	}, [id])

	if (!actors) {
		return;
	}

	console.log(actors);

	return (
		<><ul>
			{actors.length > 0 ?
				(actors.map(({ id, name, character, profile_path }) => <li key={id} >
					<h2>Name: {name}</h2>
					<p>Character: {character}</p>
					<img src={`https://image.tmdb.org/t/p/w500${profile_path}`} alt={name} />
				</li>))
				:
				(<p>There isn`t any actors</p>)
			}
		</ul>
		</>
	)
}