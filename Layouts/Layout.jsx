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
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.Main}>
        <header className={styles.Header}>
            <div className={styles.Header_container}>
                <div className={styles.Header_left}>
                    <Image className={styles.Logo} src="/next.svg" alt="" width={100} height={100} />
                </div>
                <div className={styles.Header_right}>
                    <nav className={styles.Nav}>
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
                    </nav>
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