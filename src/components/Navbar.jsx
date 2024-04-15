import { useState } from "react";
import { ToggleButton } from "../components";
import { CgMenuLeftAlt } from "react-icons/cg";
import { MdClose } from "react-icons/md";
import logo from "../assets/imgs/elad-logo.svg";

import { navList } from "../utils/constants";

const Navbar = () => {
	const [menuToggled, setMenuToggled] = useState(false);
	return (
		<div className="bg-white fixed top-0 left-0 w-full h-[70px] lg:h-[80px] flex items-center justify-center shadow-xl shadow-[#00000005]">
			<div className="container py-5 flex items-center justify-between gap-[25px] relative">
				<div className="">
					<img src={logo} className="h-[30px] lg:h-[35px] object-contain" />
				</div>
				<div className="hidden lg:flex flex-1 justify-center items-center w-full gap-2">
					{navList.map((nav, i) => (
						<a key={i} href="#" alt={nav.target} className="navlinks">
							{nav.text}
						</a>
					))}
				</div>
				<div className="flex items-center gap-2">
					<div className="lg:hidden flex items-center">
						<button
							className=""
							onClick={() => setMenuToggled((toggled) => !toggled)}
						>
							{menuToggled ? (
								<MdClose className="text-[--black] text-2xl" />
							) : (
								<CgMenuLeftAlt className="text-[--black] text-2xl" />
							)}
						</button>
					</div>
					<ToggleButton />
				</div>

				{/* popup */}
				{/* {menuToggled && (
					<div className="fixed w-full left-0 top-0 h-screen bg-[--overlay]"></div>
				)} */}
			</div>
		</div>
	);
};

export default Navbar;
