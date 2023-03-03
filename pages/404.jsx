import Layout from "@/Layouts/Layout"
import Head from 'next/head'

import fourtyOfourtyStyles from '@/styles/FourtyOfourty.module.scss'

function fourtyOfourty() {
  return (
    <Layout>
        <Head>
          <meta name='robots' content='nofollow, noindex' />
        </Head>

        <div className={fourtyOfourtyStyles.Root}>
            <h1 className={fourtyOfourtyStyles.H1}>404 | Página no encontrada.</h1>
        </div>
    </Layout>
  )
}

export default fourtyOfourty