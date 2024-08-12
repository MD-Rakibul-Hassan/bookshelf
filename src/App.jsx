import Layout from "./Layout";
import { BookContext, ThemeContext } from "./Context";
import { useReducer, useState } from "react";
import { cartReducer, initalState } from "./Reducers/CartReducer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
	const [darkMode, setDarkMode] = useState(true);
	const [state, dispatch] = useReducer(cartReducer, initalState);
	return (
		<>
			<ThemeContext.Provider value={{ darkMode, setDarkMode }}>
				<BookContext.Provider value={{state,dispatch}}>
					<Layout />
					<ToastContainer />
				</BookContext.Provider>
			</ThemeContext.Provider>
		</>
	);
}

export default App;
