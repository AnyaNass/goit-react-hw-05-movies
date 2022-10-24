import { Suspense } from "react"
import { Loader } from "components/Loader/Loader"
import { AppBar } from "components/AppBar/AppBar"
import { Outlet } from "react-router-dom"

const Layout = () => {
	return <>
		<AppBar />
		<Suspense fallback={<Loader />}>
			<Outlet />
		</Suspense>
	</>
}

export default Layout