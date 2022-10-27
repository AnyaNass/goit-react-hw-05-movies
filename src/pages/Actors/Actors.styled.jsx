import styled from "styled-components";

export const ActorsList = styled.ul`
	display: flex;
	gap: 24px;
	flex-wrap: wrap;
`

export const Actor = styled.li`
	width: 200px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: 100%;
`

export const Img = styled.img`
	height: 300px;
	width: 200px;
	border-radius: 15px;
`

export const Description = styled.div`
	padding: 8px;
	text-align: center;
`

export const Character = styled.p`
text-align: left;
margin: 8px 0 0;

	span{
		font-weight: 700;
	}
`
