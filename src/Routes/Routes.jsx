import {createBrowserRouter} from 'react-router-dom'
import App from '../App'
import Home from '../Pages/Home/Home'
import About from '../Pages/About/About'
import Layout from '../Layout'
import Trending from '../Pages/Trending/Trending'
import NewReleases from '../Pages/NewRelesces/NewReleases'
import CommingSoon from '../Pages/CommingSoon/CommingSoon'
import Favourite from '../Pages/Favourite/Favourite'

export const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "",
				element: <Home />,
			},
			{
				path: "/trending-books",
				element: <Trending />,
			},
			{
				path: "/new-releases",
				element: <NewReleases />,
			},
			{
				path: "/upcoming-books",
				element: <CommingSoon />,
			},
			{
				path: "/favorite-books",
				element: <Favourite />,
			},
		],
	},
]);