import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { ThemeContext } from "./Context";
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";

const Layout = () => {
	const { darkMode } = useContext(ThemeContext);
	return (
		<div className={`h-full w-full ${darkMode ? "dark" : ""}`}>
			{/* Header  */}
			<Header />
			<div className="container mx-auto grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
				{/* Sidebar  */}
				<Sidebar />
				<div className="min-h-screen">
					<Outlet />
				</div>
			</div>
		</div>
	);
};

export default Layout;
