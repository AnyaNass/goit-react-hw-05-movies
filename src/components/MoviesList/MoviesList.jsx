import { List, MoviesListItem, Img, Description, MovieTitle, LinkToDetails } from "./MovieList.styled";
import { checkImage } from '../../helpers/checkImage'

export const MoviesList = ({ movies, location, toDetailsPath = "" }) => {

	return <List>
		{movies.map(({ id, title, poster_path }) => <MoviesListItem key={id}>
			<LinkToDetails to={`${toDetailsPath}${id}`} state={{ from: location }}>
				<Img src={checkImage(poster_path)} alt={title} />
				<Description>
					<MovieTitle>{title}</MovieTitle>
				</Description>
			</LinkToDetails>
		</MoviesListItem>)}
	</List>
}