import parse from 'html-react-parser';
import { v4 as uuidv4 } from 'uuid';

import ArticleReviewStyles from '@/styles/ArticleReview.module.scss'
import AmazonItem from './AmazonItem';

function ArticleReview({data}) {
  return (
    <section className={ArticleReviewStyles.Root}>
        <h2 className={ArticleReviewStyles.H2}>{data.pos}. {data.title}</h2>

        {
            data.texts.map(text => (
                <p key={uuidv4()} className={ArticleReviewStyles.P}>{parse(text)}</p>
            ))
        }

        <div className={ArticleReviewStyles.AmzContainer}>
            {
                data.items.map((item) => (
                    <AmazonItem key={item.id} data={item} />
                ))
            }
        </div>
    </section>
  )
}

export default ArticleReview