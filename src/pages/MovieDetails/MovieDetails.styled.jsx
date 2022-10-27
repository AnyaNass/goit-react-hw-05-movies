import styled from "styled-components";
import { Link } from "react-router-dom";

export const BackBtn = styled.button`
	position: absolute;
	top: 20px;
	right: 20px;
	border-radius: 50%;
	background-color: #000;
	color: red;
	height: 50px;
	width: 50px;
	box-shadow: 5px 5px 7px #000;
	font-size: 22px;
	transition: transform 250ms linear;

	:hover, :focus{
		transform: scale(1.1);
	}
`

export const MovieCard = styled.div`
	position: relative;
	display: flex;
	justify-content: center;
	gap: 30px;
	padding: 30px 15px;
`

export const ExtraInfoList = styled.ul`
	display: flex;
	justify-content: space-between;
	margin: 16px 0 0;
`
export const ExtraInfoLink = styled(Link)`
	text-decoration: none;
	font-size: 18px;
	font-weight: 700;
	color: #fff;
	transition: color 250ms linear;

	:hover, :focus{
		color: red;
	}
`
export const Img = styled.img`
	border-radius: 15px;
`
export const Description = styled.div`
	width: 80%;
`
export const MovieTitle = styled.h2`
	font-size: 32px;
	font-weight: 800;
`

export const Score = styled.p`
	display: flex;
	align-items: baseline;
	gap: 10px;
	margin: 16px 0 0;

	span{
		font-weight: 700;
		font-size: 20px;
	}
`

export const Subtitle = styled.h3`
	font-weight: 700;
	font-size: 20px;
	margin: 16px 0 0;
`
export const Overview = styled.p`
	margin: 8px 0 0;
`
export const GenresList = styled.ul`
	display: flex;
	gap: 10px;
	margin: 8px 0 0;
`