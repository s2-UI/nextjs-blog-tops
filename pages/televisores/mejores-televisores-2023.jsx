import Layout from '@/Layouts/Layout'
import Image from 'next/image'
import Product from '@/components/Product'
import { tvList } from '@/pages/api/televisions'

import styles from '@/styles/Products.module.scss'


export default function Home({tvList}) {
  return (
    <Layout 
    title="Las mejores televisiones de 2023 - Comparativa y guía de compra" 
    description="Encuentra la mejor televisión para ti en 2023 con nuestra comparativa y guía de compra. Analizamos las características de las principales marcas y modelos para que puedas tomar una decisión informada. ¡No pierdas más tiempo buscando, encuentra tu televisión ideal aquí!"
    canonical='https://www.reviewshub.es/televisores/mejores-televisores-2023'
    >
      <div className={`${styles.Page} gb-container`}>
        <header>
          <h1 className={styles.h1}>Top 10: Las mejores Smart TV del 2023</h1>  
        </header>

        <div className={styles.TopSection}>
            <Image className={styles.TopSection_image} src="/archivo/pexels-jeshootscom-1040160.jpg" alt="Imágen de familia viendo la televisión" title="Imágen de familia viendo la televisión" width={524} height={100} />
            <p>Encuentra la smart TV perfecta para ti con nuestra selección de los mejores modelos de 2023. Sabemos que cambiar de televisor no es algo que se haga a menudo, por eso es esencial <strong>elegir un modelo que esté a la altura del presente y futuro</strong>. Actualmente, una smart TV es imprescindible para disfrutar de contenido en streaming de plataformas como Netflix, HBO o Prime Video, pero hay muchas otras cosas a considerar.</p>
            <p>Desde la <strong>calidad de imagen hasta la experiencia de juego o el sonido</strong>, cada usuario tiene diferentes necesidades y presupuestos. Por eso, hemos seleccionado una variedad de modelos con prestaciones y funcionalidades destacadas para diferentes tipos de usuarios.</p>
            <p>Además, en nuestra guía de compra, te ayudamos a entender las características importantes para encontrar <strong>la televisión perfecta sin complicarte con tecnicismos y conceptos abstractos</strong>. ¡Descubre la tele perfecta para ti en nuestra lista de las mejores smart TV de 2023!</p>
            <p>Adquirir un televisor es una inversión que no se hace con frecuencia, por lo que es <strong>esencial tomar una decisión informada para asegurar una buena experiencia a largo plazo</strong>. Hay muchos factores que considerar, como la calidad de imagen, el sonido, el diseño y el rendimiento en gaming. Para ayudarte en tu elección, hemos evaluado y seleccionado los mejores modelos de smart TV disponibles, teniendo en cuenta todas estas características.</p>
        </div>
        { 
          tvList.map(item => (
              <Product key={item.id} item={item} />
          ))
        }
      </div>
    </Layout>
  )
}

export const getStaticProps = async () => {
  return {
    props: {
      tvList
    },
  }
}