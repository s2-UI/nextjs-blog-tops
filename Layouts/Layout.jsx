import Head from "next/head";
import Link from "next/link";

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
                    <Link className={layoutStyles.Logo} href="/" title="ReviewsHub.es">ReviewsHub.es</Link>
                    {/* <Image className={styles.Logo} src="/logo.png" alt="Logo principal de pickiwise" width={512} height={512} /> */}
                </div>
                <div className={layoutStyles.Header_right}>
                    <nav className={layoutStyles.Nav}>
                        <ul className={layoutStyles.Nav_ul}>
                            <li className={`${layoutStyles.Nav_li} gb-group`}>
                                Televisores
                                <ul className={`${layoutStyles.Subnav} gb-subgroup`}>
                                    <li className={layoutStyles.Subnav_li}>
                                        <Link className={layoutStyles.Subnav_a} href="/televisores/mejor-televisor-videojuegos" title="Cómo elegir el mejor televisor para videojuegos">
                                            Mejor televisor para videojuegos
                                        </Link>
                                    </li>
                                    <li className={layoutStyles.Subnav_li}>
                                        <Link className={layoutStyles.Subnav_a} href="/televisores/cinco-mejores-oled-55" title="Las 5 mejores TV OLED de 55 pulgadas">
                                            Las 5 mejores TV OLED de 55&quot;
                                        </Link>
                                    </li>
                                    <li className={layoutStyles.Subnav_li}>
                                        <Link className={layoutStyles.Subnav_a} href="/televisores/mejores-televisores-2023" title="Las 10 mejores smart tv del 2023">
                                            Mejores Smart TV 2023
                                        </Link>
                                    </li>
                                    <li className={layoutStyles.Subnav_li}>
                                        <Link className={layoutStyles.Subnav_a} href="/televisores/las-cinco-mejores-marcas" title="Las 5 mejores marcas de televisores del mercado">
                                            Mejores Marcas
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>

        <div className={layoutStyles.Content}>
            {children}
        </div>

        <footer className={layoutStyles.Footer}>
            <div className={layoutStyles.Footer_container}>
                <div className={layoutStyles.Footer_brand}>
                    <p>En <Link href="/" title="ReviewsHub.es">ReviewsHub.es</Link> podrás encontrar las últimas novedades en tecnología, así como ofertas y análisis de artículos tecnológicos destacados, como televisores inteligentes, gadgets de última generación, wearables, ordenadores portátiles, tablets y mucho más. Mantente actualizado con las mejores noticias y reseñas en <Link href="/" title="ReviewsHub.es">ReviewsHub.es</Link>.</p>
                </div>
                <div className={layoutStyles.Footer_afiliado}>
                    <p>En calidad de Afiliado de Amazon, obtengo ingresos por las compras adscritas que cumplen los requisitos aplicables en Amazon y otras tiendas online.</p>
                </div>
                <div className={layoutStyles.Footer_about}>
                    <h2>Sobre ReviewsHub.es</h2>

                    <ul>
                        <li><Link href="/aviso-legal" title="Aviso legal">Aviso legal</Link></li>
                        <li><Link href="/politica-de-cookies" title="Cookies">Cookies</Link></li>
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