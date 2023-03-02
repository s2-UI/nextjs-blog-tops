import AbstractArticle from '@/components/AbstractArticle';
import Layout from '@/Layouts/Layout';

import { abstractArticles } from '@/pages/api/abstractarticles';

import indexStyles from '@/styles/Index.module.scss';

export default function Home({ abstractArticles }) {
  return (
    <Layout
      title='Reviewshub.es - El mejor análisis de tecnología'
      description='Explora la página web de análisis de tecnología más confiable: Reviewshub.es. Lee nuestras reseñas de expertos en tecnología.'
    >
      <header className={indexStyles.Header}>
        <div className='gb-container'>
          <p className={indexStyles.Header_cap}>
            Encuentra los mejores productos en
          </p>
          <h1 className={indexStyles.Header_h1}>ReviewsHub.es</h1>
          <p className={indexStyles.Header_subtitle}>
            ¿Estás buscando los mejores productos del mercado? ¿No sabes cuál es
            la mejor opción para ti? No te preocupes más, en Reviewshub.es te
            ofrecemos comparativas y reseñas de los productos más fiables de
            España.
          </p>
        </div>
      </header>

      <div className={`${indexStyles.Container} gb-container`}>
        {abstractArticles.map((item) => (
          <AbstractArticle
            key={item.id}
            data={item}
          />
        ))}
      </div>
    </Layout>
  );
}

export const getStaticProps = async () => {
  return {
    props: {
      abstractArticles,
    },
  };
};
