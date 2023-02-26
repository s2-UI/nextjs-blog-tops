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
                    <Link className={styles.Logo} href="/" title="ReviewsHub.es" alt="Enlace a ReviewsHub.es">ReviewsHub.es</Link>
                    {/* <Image className={styles.Logo} src="/logo.png" alt="Logo principal de pickiwise" width={512} height={512} /> */}
                </div>
                <div className={styles.Header_right}>
                    {/* <nav className={styles.Nav}>
                        <ul className={styles.Nav_ul}>
                            <li className={styles.Nav_li}>
                                <Link className={styles.Nav_a} href="" title="">
                                    Texto
                                </Link>
                            </li>
                            <li className={styles.Nav_li}>
                                <Link className={styles.Nav_a} href="" title="">
                                    Texto
                                </Link>
                            </li>
                            <li className={styles.Nav_li}>
                                <Link className={styles.Nav_a} href="" title="">
                                    Texto
                                </Link>
                            </li>
                        </ul>
                    </nav> */}
                </div>
            </div>
        </header>

        <div className={styles.Content}>
            {children}
        </div>

        <footer className={styles.Footer}>

        </footer>
      </main>
    </>
  )
}

export default Layout