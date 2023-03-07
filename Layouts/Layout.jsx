import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import Navbar from "@/components/Navbar";

import layoutStyles from "@/styles/Layout.module.scss";

function Layout({ children, title, description, keywords="televisores 2023, comparativa televisores, mejores televisores, guía de compra de televisores, marcas de televisores, modelos de televisores, resolución de televisores, tamaño de televisores, pantallas OLED, pantallas QLED, HDR en televisores, Smart TV, precios de televisores, opiniones de televisores, análisis de televisores", canonical }) {  
    return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content={keywords} />
        <meta name="author" content="Samuel" />
        <meta name="robots" content="index,follow" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="canonical" href={canonical} />
      </Head>

      <main className={layoutStyles.Main}>
        <header className={layoutStyles.Header}>
            <div className={layoutStyles.Header_container}>
                <div className={layoutStyles.Header_left}>
                    <Link className={layoutStyles.Logo} href="/" title="ReviewsHub.es">
                        <Image className={layoutStyles.Logo} src="/logo.png" alt="Logo principal de ReviewsHub" width={512} height={512} />
                    </Link>
                </div>
                <div className={layoutStyles.Header_right}>
                    <Navbar />
                </div>
            </div>
        </header>

        <div className={layoutStyles.Content}>
            {children}
        </div>

        <footer className={layoutStyles.Footer}>
            <div className={layoutStyles.Footer_container}>
                <div className={layoutStyles.Footer_brand}>
                    <p>En <Link href="/" title="ReviewsHub">ReviewsHub</Link> podrás encontrar los análisis más detallados y comparativas actualizadas de los últimos modelos de televisores inteligentes, barras de sonido y otros dispositivos de entretenimiento del hogar. Además, te mantendremos al día con las últimas novedades y tendencias en tecnología de entretenimiento para que puedas tomar la mejor decisión de compra. ¡Visítanos y descubre todo lo que necesitas saber antes de adquirir tu próximo dispositivo de entretenimiento en el hogar en <Link href="/" title="ReviewsHub">ReviewsHub</Link>!</p>
                </div>
                <div className={layoutStyles.Footer_afiliado}>
                    <p>En calidad de Afiliado de Amazon, obtengo ingresos por las compras adscritas que cumplen los requisitos aplicables en Amazon y otras tiendas online.</p>
                </div>
                <div className={layoutStyles.Footer_about}>
                    <h2>Sobre ReviewsHub</h2>

                    <ul>
                        <li><Link href="/aviso-legal" title="Aviso legal">Aviso legal</Link></li>
                        {/* <li><Link href="/politica-de-cookies" title="Cookies">Cookies</Link></li> */}
                        {/* <li><Link href="/" title="Privacidad">Privacidad</Link></li>
                        <li><Link href="/" title="Contacto">Contacto</Link></li> */}
                    </ul>
                </div>
            </div>
            <div className={layoutStyles.Footer_derechos}>
                <div className={layoutStyles.Footer_container}>
                    <p>2022 - 2023 © Derechos reservados por <Link href="/" title="ReviewsHub.es">ReviewsHub.es</Link></p>
                </div>
            </div>
        </footer>
      </main>
    </>
  )
}

export default Layout