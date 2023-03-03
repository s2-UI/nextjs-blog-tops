import Layout from '@/Layouts/Layout'
import Image from 'next/image'
import Link from 'next/link'
import { compraSmart } from '@/pages/api/amazonitemsmarttv'

import ArticleStyles from '@/styles/Article.module.scss'
import AmazonItem from '@/components/AmazonItem'

export default function Home({compraSmart}) {
  return (
    <Layout 
    title="Guía de compra de Smart TV: Consejos para la mejor televisión." 
    description="Guía de compra de Smart TV para el 2023: Todo lo que necesitas saber antes de elegir. Tamaño de pantalla, resolución, sistema operativo y conectividad son los aspectos clave. ¡Asegúrate de encontrar la Smart TV adecuada y disfruta de una experiencia visual perfecta!"
    canonical='https://www.reviewshub.es/televisores/guia-comprar-smart-tv'
    >
      <article className={ArticleStyles.Root}>
        <div className={ArticleStyles.HeaderBg}>
          <div className={ArticleStyles.HeaderBg_img} style={{ backgroundImage: 'url(/archivo/fondo_comprar_smart.jpg)' }}></div>
        </div>

        <header className={ArticleStyles.Header}>
            <h1 className={ArticleStyles.Header_h1}>Guía completa para comprar la mejor Smart TV en 2023</h1>
            <p className={ArticleStyles.Header_p}>Como expertos en tecnología, sabemos que elegir la televisión adecuada es crucial para tener una experiencia de visualización perfecta. Con la llegada del 2023, se espera que el mercado de Smart TVs siga creciendo, y por lo tanto, es importante que conozcas los consejos para comprar la Smart TV adecuada para ti.</p>
        </header>

        <div className={ArticleStyles.Content}>
            <p>En este artículo, te presentamos nuestra guía completa de compra de Smart TVs para el 2023. Encontrarás todo lo que necesitas saber antes de comprar una nueva televisión, desde el tamaño adecuado hasta la resolución de imagen, pasando por las características más importantes que debes tener en cuenta.</p>

            <section className={ArticleStyles.Section}>
                <h2 className={ArticleStyles.H2}>¿Qué es una Smart TV?</h2>
                <p>En primer lugar, es importante que entiendas qué es una Smart TV. Se trata de un tipo de televisión que tiene conexión a internet y, por lo tanto, acceso a una amplia variedad de contenidos en línea. Puedes ver tus programas de televisión y películas favoritas en línea, acceder a servicios de transmisión de video como Netflix o Amazon Prime Video, o navegar por la web en busca de contenido.</p>
                <Image className={ArticleStyles.Img_center} src='/archivo/pexels-johnmark-smith-2726370.jpg' alt='Dos personas buscando' title='¿Qué características buscar en un televisor para juegos?' width={512} height={300} />
            </section>

            <section className={ArticleStyles.Section}>
                <h2 className={ArticleStyles.H2}>Consejos para comprar una Smart TV</h2>
                <p>A continuación, presentamos algunos consejos que debes tener en cuenta antes de comprar una Smart TV:</p>
                
                <h3 className={ArticleStyles.H3}>Tamaño de pantalla</h3>
                <p>El tamaño de la pantalla es uno de los aspectos más importantes a considerar al comprar una Smart TV. Debes elegir el tamaño adecuado de su TV debe estar en proporción con el tamaño de la habitación en la que se encuentra. Una pantalla demasiado grande en una habitación pequeña puede resultar abrumadora, mientras que una pantalla demasiado pequeña en una habitación grande puede hacer que la imagen se vea pequeña e incómoda. Como regla general, para habitaciones pequeñas, se recomienda una pantalla de 32 a 43 pulgadas, mientras que para habitaciones grandes se sugiere una pantalla de 50 pulgadas o más.</p>
                <p>La distancia a la que se encuentra de la pantalla también es importante. Una pantalla más grande puede resultar más atractiva, pero si se sienta demasiado cerca, puede resultar molesto e incluso dañino para sus ojos. En general, la distancia recomendada para ver una pantalla de 32 pulgadas es de al menos 1,5 metros, mientras que para pantallas de 50 pulgadas o más se recomienda una distancia de al menos 2,5 metros.</p>
                <AmazonItem data={compraSmart[0]} />
                <p>¿Para qué va a utilizar principalmente su TV? Si solo la va a utilizar para ver la televisión, entonces un tamaño de pantalla más pequeño podría ser suficiente. Sin embargo, si planea utilizarla para juegos, deportes o películas, entonces una pantalla más grande puede ser más adecuada para disfrutar de una experiencia visual inmersiva.</p>
                <p>Finalmente, su presupuesto también es un factor a considerar. A medida que aumenta el tamaño de la pantalla, también lo hace el precio. Si bien una pantalla grande puede ser atractiva, asegúrese de tener en cuenta su presupuesto y elegir una pantalla que se adapte a sus necesidades y su presupuesto.</p>

                <h3 className={ArticleStyles.H3}>Resolución de imagen</h3>
                <p>La resolución de imagen es otro aspecto crucial a considerar. En general, cuanto mayor sea la resolución, mejor será la calidad de imagen. Las opciones de resolución más comunes son Full HD (1080p) y Ultra HD o 4K (2160p). Si tienes un presupuesto limitado, la opción de Full HD puede ser suficiente. Sin embargo, si quieres una calidad de imagen excepcional, te recomendamos que elijas una televisión con una resolución de 4K.</p>
                <AmazonItem data={compraSmart[1]} />

                <h3 className={ArticleStyles.H3}>Sistema operativo</h3>
                <p>El sistema operativo de la Smart TV es otra característica importante. Debe ser fácil de usar y permitirte acceder a todas las aplicaciones que deseas. Los sistemas operativos más populares son Android TV, webOS de LG, Tizen de Samsung y Roku TV. Cada uno de ellos tiene sus propias ventajas y desventajas, así que debes elegir el que mejor se adapte a tus necesidades.</p>
                <AmazonItem data={compraSmart[2]} />

                <h3 className={ArticleStyles.H3}>Conectividad</h3>
                <p>La conectividad es crucial para cualquier Smart TV. Debe tener conexiones Wi-Fi y Bluetooth para que puedas conectarla a otros dispositivos. Además, te recomendamos que elijas una televisión que tenga varias entradas HDMI si son 2.1 mucho mejor para que puedas conectar todos tus dispositivos, como consolas de videojuegos, reproductores de Blu-ray y dispositivos de streaming.</p>
                <AmazonItem data={compraSmart[3]} />
            </section>

            <section className={ArticleStyles.Section}>
                <h2 className={ArticleStyles.H2}>Conclusiones</h2>
                <p>En resumen, comprar una Smart TV puede ser una tarea desafiante, pero siguiendo estos consejos, podrás elegir la televisión adecuada para ti. No olvides considerar el tamaño de pantalla, la resolución de imagen, el sistema operativo y la conectividad antes de tomar una decisión.</p>
                <p>Esperamos que nuestra guía de compra de Smart TVs para el 2023 te haya sido útil.</p>
            </section> 
        </div>
      </article>
    </Layout>
  )
}

export const getStaticProps = async () => {
    return {
      props: {
        compraSmart
      },
    }
  }