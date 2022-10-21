import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Header = styled.header`
	padding: 16px 0;
	background-color: #000;
	border-bottom: 2px solid gray;
	box-shadow: 0 5px 5px gray;
`

export const Nav = styled.nav`
	display: flex;
	gap: 16px;
	justify-content: center;
`

export const NavItem = styled(NavLink)`
	font-weight: 700;
	font-size: 25px;
	color: #fff;
	text-decoration: none;
	
	&.active{
		color: red;
	}

	:hover:not(.active), :focus-visible:not(.active){
		color: red;
	}
`