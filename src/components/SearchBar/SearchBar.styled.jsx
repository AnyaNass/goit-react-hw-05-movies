import styled from "styled-components";
import { Link } from "react-router-dom";

export const Form = styled.form`
	display: flex;
	gap: 12px;
	justify-content: center;
	margin: 0 0 30px 0;
	align-items: center;
`

export const Input = styled.input`
	width: 400px;
	background-color: #000;
	border: none;
	padding: 20px 15px;
	display: block;
	outline: none;
	color: #fff;
	border-bottom: 1px solid transparent;
	border-radius: 5px;
	transition: border 250ms linear;

	:focus{
		border-bottom: 1px solid red;
	}
`

export const Submit = styled.button`
	width: 60px;
	height: 60px;
	background-color: rgb(0, 0, 0);
	color: red;
	font-weight: 900;
	font-size: 22px;
	border-radius: 50%;
	transition: transform 250ms linear;

	:hover, :focus{
		transform: scale(1.1);
	}
`

export const MoviesList = styled.ul`
	display: flex;
	justify-content: center;
	gap: 30px;
	flex-wrap: wrap;
	padding: 30px 0;
`

export const MoviesListItem = styled.li`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: 100%;
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