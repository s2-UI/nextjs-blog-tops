import { useState } from "react";
import NavbarPanel from "./NavbarPanel";

import { BiMenu } from "react-icons/bi"; 

function Navbar() {
	let [isOpen, setTogglePanel] = useState(false);

	const handleMenu = () => {
	    setTogglePanel(!isOpen);
	};

	return (
		<>
            <button className="text-4xl text-slate-50 hover:text-orange-400" onClick={handleMenu}>
                <BiMenu />
            </button>

            <NavbarPanel isOpen={isOpen} setTogglePanel={setTogglePanel} />
		</>
	);
}

export default Navbar;
