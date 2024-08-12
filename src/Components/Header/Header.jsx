import { useContext, useState } from "react";
import { BookContext, ThemeContext } from "../../Context";
import { ImBooks } from "react-icons/im";
import { FaRegBell } from "react-icons/fa";
import { MdOutlineLightMode } from "react-icons/md";
import { IoMoonOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import CartDetails from "./CartDetails";

const Header = () => {
	const [showCart, setShowCart] = useState(false);
	const { state, dispatch } = useContext(BookContext);
	const { darkMode, setDarkMode } = useContext(ThemeContext);

	const handleCartShow = () => {
		if (state.cartData.length > 0) {
			setShowCart(true);
		} else {
			setShowCart(false);
		}
	};
	return (
		<header>
			{
				showCart && <CartDetails onClose={() => setShowCart(false)}/>
			}
			<nav className="container mx-auto flex items-center justify-between space-x-10 py-6">
				{/* Logo  */}
				<div>
					<a href="/" className="flex items-center gap-2">
						<ImBooks className="w-8 h-8" />{" "}
						<span className="font-semibold text-xl">
							Book<span className="text-[#12CF6F]">Shelf</span>
						</span>
					</a>
				</div>
				{/* Icons  */}
				<ul className="flex gap-5">
					<li>
						<a
							href="#"
							className="bg-primary/20 dark:bg-primary/[5%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
						>
							<FaRegBell />
						</a>
					</li>
					<li>
						<a
							href="#"
							className="bg-primary/20 dark:bg-primary/[5%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
							onClick={() => setDarkMode(!darkMode)}
						>
							{darkMode ? <MdOutlineLightMode /> : <IoMoonOutline />}
						</a>
					</li>
					<li>
						<a
							onClick={handleCartShow}
							href="#"
							className="bg-primary/20 dark:bg-primary/[5%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
						>
							<IoCartOutline />
							{state.cartData.length > 0 && (
								<span className="rounded-full absolute top-[-15px] bg-[#12CF6F] right-[-15px] text-white text-center p-[2px] w-[25px] h-[25px]">
									{state.cartData.length}
								</span>
							)}
						</a>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
