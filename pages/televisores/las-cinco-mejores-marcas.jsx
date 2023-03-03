import Layout from '@/Layouts/Layout'
import ArticleReview from '@/components/ArticleReview'
import { mejoresMarcas } from '@/pages/api/mejoresmarcas';

import ArticleStyles from '@/styles/Article.module.scss'


export default function Home({mejoresMarcas}) {
  return (
    <Layout 
    title="Las 5 mejores marcas de televisores del mercado en 2023" 
    description="Descubre cuáles son las 5 mejores marcas de televisores del mercado en 2023 y por qué debes considerarlas antes de realizar tu próxima compra."
    canonical='https://www.reviewshub.es/televisores/las-cinco-mejores-marcas'
    >
      <article className={ArticleStyles.Root}>
        <div className={ArticleStyles.HeaderBg}>
          <div className={ArticleStyles.HeaderBg_img} style={{ backgroundImage: 'url(/pexels-cottonbro-studio-4009409.jpg)' }}></div>
        </div>

        <header className={ArticleStyles.Header}>
            <h1 className={ArticleStyles.Header_h1}>Las 5 mejores marcas de televisores del mercado en 2023</h1>  

            <p className={ArticleStyles.Header_p}>En la actualidad, la <strong>televisión</strong> es una de las formas de <strong>entretenimiento</strong> más populares en todo el mundo. Las marcas líderes en el mercado compiten constantemente por ofrecer productos de alta calidad, <strong>resolución</strong> y <strong>sonido</strong> para brindar a los usuarios la mejor experiencia de <strong>visualización</strong>. En este artículo, analizaremos las 5 mejores marcas de <strong>televisores</strong> del mercado en 2023.</p>
        </header>

        <div className={ArticleStyles.Content}>

          {
              mejoresMarcas.map((data) => (
                  <ArticleReview key={data.id} data={data} />
              ))
          }
        </div>

        <footer>
            <h2>¿Cuál es la mejor marca de televisores?</h2>
            <p>A la hora de elegir la mejor marca de televisores, es importante tener en cuenta que cada marca tiene sus propias fortalezas y debilidades, y que la elección dependerá de las necesidades y preferencias de cada usuario. Sin embargo, en base a los modelos más destacados de las marcas analizadas en este artículo, podemos concluir que Sony, Samsung, LG, Panasonic y Philips son algunas de las mejores marcas de televisores del mercado en 2023.</p>

            <h3>Conclusion</h3>
            <p>En conclusión, el mercado de televisores en 2023 ofrece una amplia variedad de modelos y marcas, lo que puede hacer que elegir el mejor televisor sea una tarea complicada. Sin embargo, al tener en cuenta aspectos como el tamaño, la resolución, la tecnología de pantalla y la conectividad, y al analizar las marcas más destacadas del mercado, como Sony, Samsung, LG, Panasonic y Philips, podemos tomar una decisión informada al comprar nuestro próximo televisor.</p>
        </footer>
      </article>
    </Layout>
  )
}

export const getStaticProps = async () => {
  return {
    props: {
      mejoresMarcas,
    },
  };
};