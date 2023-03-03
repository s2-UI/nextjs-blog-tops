import Image from 'next/image'
import Link from 'next/link'
import ReactStars from 'react-stars'
import { v4 as uuidv4 } from 'uuid';
import parse from 'html-react-parser';
import { FaAmazon } from "react-icons/fa";

import AmazonItemStyles from '@/styles/AmazonItem.module.scss'

function AmazonItem({data}) {
  return (
    <div className={AmazonItemStyles.Root}>
        <Link href={data.link} title={data.linkTitle} target="_blank">
            <Image className={AmazonItemStyles.Img} src={data.img} alt={data.imgAlt} title={data.imgTitle} width={300} height={100} />
        </Link>

        <div className={AmazonItemStyles.Content}>
            {
                data.texts?.map((text) => (
                    <p key={uuidv4()} className={AmazonItemStyles.P}>{parse(text)}</p>
                ))
            }
        </div>

        <div className={AmazonItemStyles.Footer}>
            <ReactStars className={AmazonItemStyles.Stars} count={5} value={data.value} size={24} color2={'#ffa41c'} edit={false} />
            <Link className={AmazonItemStyles.Reviews} href={data.link} title="Ver valoraciones en Amazon" target="_blank">
                {data.reviews} valoraciones
            </Link>
            <Link className={AmazonItemStyles.Link} href={data.link} title={data.linkTitle} target="_blank">
                <FaAmazon />
                Ver en Amazon
            </Link>
        </div>
    </div>
  )
}

export default AmazonItem