import Link from "next/link"
import { useState } from "react";

import { FaTimes, FaChevronDown } from "react-icons/fa";
import navbarPanel from '@/styles/NavbarPanel.module.scss'

function NavbarPanel({ isOpen, setTogglePanel }) {
    let [isVideoOpen, setToggleVideoSubPanel] = useState(false);
    let [isSoundOpen, setToggleSoundSubPanel] = useState(false);

	const handleVideoSubMenu = () => {
	    setToggleVideoSubPanel(!isVideoOpen);
	};

    const handleSoundSubMenu = () => {
	    setToggleSoundSubPanel(!isSoundOpen);
	};

    const handleMenu = () => {
        setTogglePanel(!isOpen);
    };

  return (
    <nav className={`${navbarPanel.Nav} ${isOpen ? navbarPanel.Open : navbarPanel.Close}`}>
        <button className={navbarPanel.Nav_close} onClick={handleMenu}>
            <FaTimes />
        </button>
        <div className={navbarPanel.Nav_section}>
            <Link className={`${navbarPanel.Nav_title} mb-8`} href="/" title="Análisis y sugerencias en vídeo, audio y más">
                Inicio
            </Link>
        </div>
        <div className={`${navbarPanel.Nav_section} ${isVideoOpen ? navbarPanel.Nav_show : navbarPanel.Nav_hide}`}>
            <p className={navbarPanel.Nav_title} onClick={handleVideoSubMenu}>
                Vídeo
                <FaChevronDown />
            </p>
            <ul className={navbarPanel.Nav_ul}>
                <li className={navbarPanel.Nav_li}>
                    <Link className={navbarPanel.Nav_a} href="/televisores/smartv-menos-500" title="Las mejores TV por menos de 500 euros">
                        Las mejores TV por menos de 500 euros
                    </Link>
                </li>
                <li className={navbarPanel.Nav_li}>
                    <Link className={navbarPanel.Nav_a} href="/televisores/mejor-televisor-videojuegos" title="Cómo elegir el mejor televisor para videojuegos">
                        Mejor televisor para videojuegos
                    </Link>
                </li>
                <li className={navbarPanel.Nav_li}>
                    <Link className={navbarPanel.Nav_a} href="/televisores/cinco-mejores-oled-55" title="Las 5 mejores TV OLED de 55 pulgadas">
                        Las 5 mejores TV OLED de 55&quot;
                    </Link>
                </li>
                <li className={navbarPanel.Nav_li}>
                    <Link className={navbarPanel.Nav_a} href="/televisores/mejores-televisores-2023" title="Las 10 mejores smart tv del 2023">
                        Mejores Smart TV 2023
                    </Link>
                </li>
                <li className={navbarPanel.Nav_li}>
                    <Link className={navbarPanel.Nav_a} href="/televisores/las-cinco-mejores-marcas" title="Las 5 mejores marcas de televisores del mercado">
                        Mejores Marcas
                    </Link>
                </li>
            </ul>
        </div>
        <div className={`${navbarPanel.Nav_section} ${isSoundOpen ? navbarPanel.Nav_show : navbarPanel.Nav_hide}`}>
            <p className={navbarPanel.Nav_title} onClick={handleSoundSubMenu}>
                Sonido
                <FaChevronDown />
            </p>
            <ul className={navbarPanel.Nav_ul}>
                <li className={navbarPanel.Nav_li}>
                    <Link className={navbarPanel.Nav_a} href="/sonido/sony-ht-a3000" title="Barra de Sonido Sony HT-A3000: Una experiencia de sonido de cine en casa">
                        Sony HT-A5000
                    </Link>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default NavbarPanel