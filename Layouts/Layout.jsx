import Head from "next/head";

import styles from "@/styles/Layout.module.scss";
import Image from "next/image";
import Link from "next/link";

function Layout({ children, title, description }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="televisores 2023, comparativa televisores, mejores televisores, guía de compra de televisores, marcas de televisores, modelos de televisores, resolución de televisores, tamaño de televisores, pantallas OLED, pantallas QLED, HDR en televisores, Smart TV, precios de televisores, opiniones de televisores, análisis de televisores" />
        <meta name="author" content="Samuel" />
        <meta name="robots" content="index,follow" />
        <link rel="icon" type="image/png" href="favicon.png" />
      </Head>

      <main className={styles.Main}>
        <header className={styles.Header}>
            <div className={styles.Header_container}>
                <div className={styles.Header_left}>
                    <Link className={styles.Logo} href="/" title="ReviewsHub.es">ReviewsHub.es</Link>
                    {/* <Image className={styles.Logo} src="/logo.png" alt="Logo principal de pickiwise" width={512} height={512} /> */}
                </div>
                <div className={styles.Header_right}>
                    <nav className={styles.Nav}>
                        <ul className={styles.Nav_ul}>
                            <li className={styles.Nav_li}>
                                <Link className={styles.Nav_a} href="/" title="Las 10 mejores smart tv del 2023">
                                    Mejores Smart TV 2023
                                </Link>
                            </li>
                            <li className={styles.Nav_li}>
                                <Link className={styles.Nav_a} href="/televisores/las-cinco-mejores-marcas" title="Las 5 mejores marcas de televisores del mercado">
                                    Mejores Marcas
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>

        <div className={styles.Content}>
            {children}
        </div>

        <footer className={styles.Footer}>
            <div className={styles.Footer_container}>
                <div className={styles.Footer_brand}>
                    <p>En <Link href="/" title="ReviewsHub.es">ReviewsHub.es</Link> podrás encontrar las últimas novedades en tecnología, así como ofertas y análisis de artículos tecnológicos destacados, como televisores inteligentes, gadgets de última generación, wearables, ordenadores portátiles, tablets y mucho más. Mantente actualizado con las mejores noticias y reseñas en <Link href="/" title="ReviewsHub.es">ReviewsHub.es</Link>.</p>
                </div>
                <div className={styles.Footer_afiliado}>
                    <p>En calidad de Afiliado de Amazon, obtengo ingresos por las compras adscritas que cumplen los requisitos aplicables en Amazon y otras tiendas online.</p>
                </div>
                <div className={styles.Footer_about}>
                    <h2>Sobre ReviewsHub.es</h2>

                    <ul>
                        <li><Link href="/aviso-legal" title="Aviso legal">Aviso legal</Link></li>
                        <li><Link href="/politica-de-cookies" title="Cookies">Cookies</Link></li>
                        <li><Link href="/" title="Privacidad">Privacidad</Link></li>
                        <li><Link href="/" title="Contacto">Contacto</Link></li>
                    </ul>
                </div>
            </div>
            <div className={styles.Footer_derechos}>
                <div className={styles.Footer_container}>
                    <p>2022 - 2023 © Derechos reservados por <Link href="/" title="ReviewsHub.es">ReviewsHub.es</Link></p>
                </div>
            </div>
        </footer>
      </main>
    </>
  )
}

export default Layout