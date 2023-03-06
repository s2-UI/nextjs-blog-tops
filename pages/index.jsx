import AbstractArticle from '@/components/AbstractArticle';
import Layout from '@/Layouts/Layout';

import { abstractArticles } from '@/pages/api/abstractarticles';

import indexStyles from '@/styles/Index.module.scss';
import Link from 'next/link';

export default function Home({ abstractArticles }) {
  return (
    <Layout
      title='Reviewshub.es - Análisis y sugerencias en vídeo, audio y más'
      description='Si estás buscando crear la experiencia de cine en casa perfecta, estás en el lugar correcto. En Reviewshub.es, encontrarás análisis y sugerencias de los mejores Smart TVs, barras de sonido y otros dispositivos relacionados con el entretenimiento en casa.'
      canonical='https://www.reviewshub.es/'
    >
      <header className={indexStyles.Header}>
        <div className='gb-container'>
          {/* <p className={indexStyles.Header_cap}>
            Análisis y sugerencias de Smart TVs, barras de sonido y más en
          </p> */}
          <h1 className={indexStyles.Header_h1}>Análisis y sugerencias de Smart TVs, barras de sonido y mucho más...</h1>
          <p className={indexStyles.Header_p}>Si estás buscando crear la experiencia de cine en casa perfecta, estás en el lugar correcto. En <Link href="/" title='ReviewsHub.es'>ReviewsHub.es</Link>, encontrarás análisis y sugerencias de los mejores <strong>Smart TVs</strong>, <strong>barras de sonido</strong> y otros dispositivos relacionados con el entretenimiento en casa.</p>
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
