import { Nav, NavItem, Header } from './AppBar.styled'
import { FaHome } from "react-icons/fa";
import { BsCameraReels } from "react-icons/bs";

export const AppBar = () => {
	return <Header>
		<Nav>
			<NavItem to={'/'} end><FaHome /> Home</NavItem>
			<NavItem to={'/movies'}><BsCameraReels />Movies</NavItem>
		</Nav>
	</Header>
}