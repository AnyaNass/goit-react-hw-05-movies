import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Nav = styled.nav`
	display: flex;
	gap: 10px;
`

export const NavItem = styled(NavLink)`
	font-weight: 700;
	font-size: 20px;
	color: black;
	
	&.active{
		background-color: rgb(255, 0, 0, 0.5);
		color: #fff;
	}

	:hover:not(.active), :focus-visible:not(.active){
		color: red;
	}

`