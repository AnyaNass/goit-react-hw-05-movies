import { Suspense } from "react"
import { AppBar } from "components/AppBar/AppBar"
import { Outlet } from "react-router-dom"

const Layout = () => {
	return <>
		<AppBar />
		<Suspense>
			<Outlet />
		</Suspense>
	</>
}

export default Layout