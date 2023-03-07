import { useState } from "react";
import NavbarPanel from "./NavbarPanel";

import { BiMenu } from "react-icons/bi"; 
import layoutStyles from "@/styles/Layout.module.scss";

function Navbar() {
	let [isOpen, setTogglePanel] = useState(false);

	const handleMenu = () => {
	    setTogglePanel(!isOpen);
	};

	return (
		<>
            <button className={layoutStyles.Button} onClick={handleMenu}>
                <BiMenu />
            </button>

            <NavbarPanel isOpen={isOpen} setTogglePanel={setTogglePanel} />
		</>
	);
}

export default Navbar;
