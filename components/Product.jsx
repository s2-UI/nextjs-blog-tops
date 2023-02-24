import Link from 'next/link'
import Image from 'next/image'
import { v4 as uuidv4 } from 'uuid';
import ReactStars from 'react-stars'

import styles from '@/styles/Product.module.scss'

function Product({item}) {
  return (
    <article className={styles.Article}>
        <header className={styles.Header}>
            <h2 className={styles.Header_h2}>{item.pos}. <Link href={item.link} title={item.linkTitle} target="_blank">{item.name}</Link> <span className={styles.Header_price}><span>{item.price}</span><span className={styles.Header_decimals}>,{item.decimal}€</span></span></h2>

            <section className={styles.Header_section}>
                <h4 className={styles.Header_h4}>Características</h4>

                <ul className={styles.Header_ul}>
                    <li className={styles.Header_li}><strong>Panel:</strong> {item.features.panel}</li>
                    <li className={styles.Header_li}><strong>Tamaño:</strong> {item.features.size}</li>
                    <li className={styles.Header_li}><strong>Resolución:</strong> {item.features.resolution}</li>
                    <li className={styles.Header_li}><strong>Sistema Operativo:</strong> {item.features.os}</li>
                </ul>
            </section>
        </header>

        <section className={styles.Section}>
            <Link href={item.link} title={item.linkTitle} target="_blank">
                <Image className={styles.Section_image} src={item.image} alt={item.imageAlt} width={524} height={100} />
            </Link>
            {
                item.text.map(text => (
                    <p key={uuidv4()}>{text}</p>
                ))
            }
        </section>

        <footer className={styles.Footer}>
            <section className={styles.Footer_section}>
                <div className={styles.Review}>
                    <h3 className={styles.Review_h3}>Pros</h3>
                    <ul className={styles.Review_ul}>
                        {
                            item.pros.map(pros => (
                                <li key={uuidv4()} className={styles.Review_li}>{pros}</li>
                            ))
                        }
                    </ul>
                </div>
                <div className={`${styles.Review} ${styles.Review__red}`}>
                    <h3 className={styles.Review_h3}>Contras</h3>
                    <ul className={styles.Review_ul}>
                        {
                            item.con.map(con => (
                                <li key={uuidv4()} className={styles.Review_li}>{con}</li>
                            ))
                        }
                    </ul>
                </div>
            </section>

            <section className={styles.WidgetAmazon}>
                <div className={styles.WidgetAmazon_wrapperImage}>
                    <Link href={item.link} title={item.linkTitle} target="_blank">
                        <Image className={styles.WidgetAmazon_image} src={item.image} alt={item.imageAlt} width={524} height={100} />
                    </Link>
                </div>
                <div className={styles.WidgetAmazon_wrapperText}>
                    <Link href={item.link} title={item.linkTitle} target="_blank">
                        <h3 className={styles.WidgetAmazon_h3}>{item.name}</h3>
                    </Link>
                    <p className={styles.WidgetAmazon_p}>{item.shortDesc}</p>
                </div>
                <div className={styles.WidgetAmazon_wrapperLink}>
                    <Link className={styles.WidgetAmazon_link} href={item.link} title={item.linkTitle} target="_blank">
                        Ver en Amazon
                    </Link>
                    <ReactStars className={styles.WidgetAmazon_stars} count={5} value={item.stars} size={24} color2={'#ffa41c'} edit={false} />
                    <Link className={styles.WidgetAmazon_reviews} href={item.link} title="Ver valoraciones en Amazon" target="_blank">
                        {item.rating} valoraciones
                    </Link>
                </div>
            </section>
        </footer>      
    </article>
  )
}

export default Product