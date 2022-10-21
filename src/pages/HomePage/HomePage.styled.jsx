import styled from "styled-components";
import { Link } from "react-router-dom";

export const PopularMoviesList = styled.ul`
	display: flex;
	justify-content: center;
	gap: 30px;
	flex-wrap: wrap;
	padding: 30px 0;
`
export const MoviesListItem = styled.li`
	width: 300px;
	transition: transform 250ms linear;

	:hover, :focus{
		transform: scale(1.1);
	}
`
export const Img = styled.img`
	border-radius: 15px;
	height: 495px;
	width: 330px;
`
export const Description = styled.div`
	padding: 8px;
	text-align: center;
`

export const MovieTitle = styled.p`
	text-decoration: none;
	color: #fff;
	font-weight: 700;
	font-size: 22px;
	transition: color 250ms linear;
	
	${MoviesListItem}:hover & {
		color: red;
	}
`

export const LinkToDetails = styled(Link)`
	text-decoration: none;
`