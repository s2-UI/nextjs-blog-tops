import Layout from '@/Layouts/Layout'
import Image from 'next/image'
import Link from 'next/link'
import { soundbarSony } from '@/pages/api/amazonitemssound'

import ArticleStyles from '@/styles/Article.module.scss'
import AmazonItem from '@/components/AmazonItem'

export default function Home({soundbarSony}) {
  return (
    <Layout 
    title="Barra de Sonido Sony HT-A3000: Una experiencia de sonido de cine en casa" 
    description="Con la Barra de Sonido Sony HT-A3000, disfruta de una calidad de sonido excepcional en tu cine en casa. Descubre cómo esta barra de sonido puede mejorar tu experiencia de cine en casa."
    canonical='https://www.reviewshub.es/sonido/sony-ht-a3000'
    >
      <article className={ArticleStyles.Root}>
        <div className={ArticleStyles.HeaderBg}>
          <div className={ArticleStyles.HeaderBg_img} style={{ backgroundImage: 'url(/sonido/sony/sony_ht-a3000-1.jpg)' }}></div>
        </div>

        <header className={ArticleStyles.Header}>
            <h1 className={ArticleStyles.Header_h1}>Barra de Sonido Sony HT-A3000: Una experiencia de sonido de cine en casa</h1>
            <p className={ArticleStyles.Header_p}>La Barra de Sonido Sony HT-A3000 es una barra de sonido de alta calidad que ofrece una experiencia de cine en casa excepcional. Esta barra de sonido utiliza la tecnología de sonido Dolby Atmos para crear una experiencia de sonido envolvente y realista. Además, cuenta con numerosas funciones y características avanzadas que la convierten en una de las mejores opciones para aquellos que buscan una experiencia de cine en casa única.</p>
        </header>

        <div className={ArticleStyles.Content}>
            <section className={ArticleStyles.Section}>
                <h2 className={ArticleStyles.H2}>Características y ventajas de la Barra de Sonido Sony HT-A3000</h2>
                <p>En este artículo, exploraremos las características y ventajas de la Barra de Sonido Sony HT-A3000. También responderemos algunas de las preguntas más frecuentes sobre esta barra de sonido para ayudarte a decidir si es la opción adecuada para tu cine en casa.</p>
                
                <h3 className={ArticleStyles.H3}>Tecnología de sonido Dolby Atmos</h3>
                <p>La Barra de Sonido Sony HT-A3000 utiliza la tecnología de sonido Dolby Atmos, que permite una experiencia de sonido envolvente y realista. Con esta tecnología, el sonido se puede mover en cualquier dirección, incluyendo arriba y abajo, para crear una experiencia de sonido tridimensional. Esta característica hace que la Barra de Sonido Sony HT-A3000 sea ideal para películas, música y juegos.</p>

                <h3 className={ArticleStyles.H3}>Altavoces traseros inalámbricos</h3>
                <p>La Barra de Sonido Sony HT-A3000 viene con altavoces traseros inalámbricos que se pueden colocar en cualquier lugar de la habitación. Esto significa que no es necesario realizar una instalación complicada o pasar cables por toda la habitación. Los altavoces traseros inalámbricos se conectan automáticamente a la barra de sonido, lo que facilita la instalación y proporciona una experiencia de sonido más envolvente.</p>
                
                <Image className={ArticleStyles.Img_center} src="/sonido/sony/sony_ht-a3000-2.jpg" alt="Barra de Sonido Sony HT-A3000" title="Barra de Sonido Sony HT-A3000" width={512} height={512} />

                <h3 className={ArticleStyles.H3}>Compatible con 4K HDR</h3>
                <p>La Barra de Sonido Sony HT-A3000 es compatible con 4K HDR, lo que significa que puedes disfrutar de una calidad de imagen excepcional junto con la calidad de sonido de la barra de sonido. Con esta característica, puedes experimentar imágenes más claras, más nítidas y más realistas que nunca antes.</p>

                <h3 className={ArticleStyles.H3}>Diseño elegante y moderno</h3>
                <p>La Barra de Sonido Sony HT-A3000 tiene un diseño elegante y moderno que complementa cualquier decoración de cine en casa. La barra de sonido tiene una carcasa de metal cepillado y un acabado negro mate que le da un aspecto elegante y sofisticado. Además, el tamaño compacto de la barra de sonido significa que no ocupará demasiado espacio en tu habitación.</p>
                
                <h3 className={ArticleStyles.H3}>Conectividad Wi-Fi y Bluetooth</h3>
                <p>La Barra de Sonido Sony HT-A3000 tiene conectividad Wi-Fi y Bluetooth, lo que te permite conectarte a tus dispositivos móviles, tabletas y ordenadores sin necesidad de cables. Además, la barra de sonido es compatible con Google Assistant y Amazon Alexa, lo que te permite controlar la barra de sonido con tu voz.</p>
                <AmazonItem data={soundbarSony[0]} />
            </section>

            <section className={ArticleStyles.Section}>
                <h2 className={ArticleStyles.H2}>Conclusiones</h2>
                <p>La Barra de Sonido Sony HT-A3000 es una excelente opción para aquellos que buscan una experiencia de cine en casa excepcional. Con la tecnología de sonido Dolby Atmos, los altavoces traseros inalámbricos y la compatibilidad con 4K HDR, la barra de sonido ofrece una experiencia de sonido y de imagen inigualable. Además, el diseño elegante y moderno y la conectividad Wi-Fi y Bluetooth hacen que la barra de sonido sea fácil de usar y compatible con una amplia variedad de dispositivos. En resumen, la Barra de Sonido Sony HT-A3000 es una excelente opción para cualquier persona que busque una experiencia de cine en casa única.</p>
            </section> 
        </div>
      </article>
    </Layout>
  )
}

export const getStaticProps = async () => {
    return {
      props: {
        soundbarSony
      },
    }
  }