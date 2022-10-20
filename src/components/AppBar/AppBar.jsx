import { Nav, NavItem } from './AppBar.styled'

export const AppBar = () => {
	return <header>
		<Nav>
			<NavItem to={'/'}>Home</NavItem>
			<NavItem to={'/movies'}>Movies</NavItem>
		</Nav>
	</header>
}