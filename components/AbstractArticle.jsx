import Image from 'next/image'
import Link from 'next/link'

import AbstractArticleStyles from '@/styles/AbstractArticle.module.scss'

function AbstractArticle({data}) {
  return (
    <article className={AbstractArticleStyles.Item}>
        <Link className={AbstractArticleStyles.Item_container} href={data.link} title={data.linkTitle}>
            <Image className={AbstractArticleStyles.Item_img} src={data.img} width={512} height={300} alt={data.imgAlt} title={data.imgTitle} />
            <h2 className={AbstractArticleStyles.Item_h2}>{data.title}</h2>
            <p className={AbstractArticleStyles.Item_p}>{data.description}</p>
        </Link>
    </article>
  )
}

export default AbstractArticle