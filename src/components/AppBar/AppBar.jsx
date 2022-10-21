import { Nav, NavItem, Header } from './AppBar.styled'

export const AppBar = () => {
	return <Header>
		<Nav>
			<NavItem to={'/'}>Home</NavItem>
			<NavItem to={'/movies'}>Movies</NavItem>
		</Nav>
	</Header>
}