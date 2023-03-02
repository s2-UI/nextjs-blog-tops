import Layout from "@/Layouts/Layout"

import fourtyOfourtyStyles from '@/styles/FourtyOfourty.module.scss'

function fourtyOfourty() {
  return (
    <Layout>
        <div className={fourtyOfourtyStyles.Root}>
            <h1 className={fourtyOfourtyStyles.H1}>404 | Página no encontrada.</h1>
        </div>
    </Layout>
  )
}

export default fourtyOfourty