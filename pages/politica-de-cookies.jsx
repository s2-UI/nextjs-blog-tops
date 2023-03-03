import Layout from '@/Layouts/Layout'
import Link from 'next/link'
import Head from 'next/head'


export default function PoliticaDeCookies() {
  return (
    <Layout 
    title="Política de Cookies - ReviewsHub" 
    description="En esta web recopilo y utilizo la información según indico en mi política de privacidad. Una de las formas en las que recopiló información es a través del uso"
    >
      <Head>
        <meta name='robots' content='nofollow, noindex' />
      </Head>

      <div className='Page FormatingText'>
        <header>
          <h1>Política de Cookies</h1>
        </header>

        <p>En esta web recopilo y utilizo la información según indico en mi política de privacidad. Una de las formas en las que recopiló información es a través del uso de la tecnología llamada “cookies”. En https://www.reviewshub.es/ , se utilizan cookies para varias cosas.</p>
        
        <h2>¿Qué es una cookie?</h2>
        <p>Una “cookie” es una pequeña cantidad de texto que se almacena en tu navegador (como Chrome de Google o Safari de Apple) cuando navegas por la mayoría de los sitios web.</p>

        <h2>¿Qué NO es una cookie?</h2>
        <p>No es un virus, ni un troyano, ni un gusano, ni spam, ni spyware, ni abre ventanas pop-up.</p>

        <h2>¿Qué información almacena una cookie?</h2>
        <p>Las cookies no suelen almacenar información sensible sobre usted, como tarjetas de crédito o datos bancarios, fotografías o información personal, etc. Los datos que guardan son de carácter técnico, estadísticos, preferencias personales, personalización de contenidos, etc.</p>
        <p>El servidor web no le asocia a usted como persona sino a su navegador web. De hecho, si usted navega habitualmente con el navegador Chrome y prueba a navegar por la misma web con el navegador Firefox, verá que la web no se da cuenta que es usted la misma persona porque en realidad está asociando la información al navegador, no a la persona.</p>

        <h2>¿Qué tipo de cookies existen?</h2>
        <ul>
            <li>Cookies técnicas: Son las más elementales y permiten, entre otras cosas, saber cuándo está navegando un humano o una aplicación automatizada, cuándo navega un usuario anónimo y uno registrado, tareas básicas para el funcionamiento de cualquier web dinámica.</li>
            <li>Cookies de análisis: Recogen información sobre el tipo de navegación que está realizando, las secciones que más utiliza, productos consultados, franja horaria de uso, idioma, etc.</li>
            <li>Cookies publicitarias: Muestran publicidad en función de su navegación, su país de procedencia, idioma, etc.</li>
        </ul>

        <h2>¿Qué son las cookies propias y las de terceros?</h2>
        <p>Las cookies propias son las generadas por la página que está visitando y las de terceros son las generadas por servicios o proveedores externos como Mailchimp, Mailrelay, Facebook, Twitter, Google adsense, etc.</p>

        <h2>¿Qué cookies utiliza esta web?</h2>
        <p>Esta web utiliza cookies propias y de terceros. En este sitio web se utilizan las siguientes cookies que se detallan a continuación:</p>

        <h2>Cookies propias</h2>
        <p>Personalización: Las cookies me ayudan a recordar con qué personas o sitios web has interactuado, para que pueda mostrarte contenido relacionado.</p>
        <p>Preferencias: Las cookies me permiten recordar tus ajustes y preferencias, como el idioma preferido y tu configuración de privacidad.</p>
        <p>Seguridad: Utilizo cookies para evitarte riesgos de seguridad. Principalmente para detectar cuándo alguien está intentando piratear tu cuenta de https://www.reviewshub.es/.</p>

        <h2>Cookies de terceros</h2>
        <p>Esta web utiliza servicios de análisis, concretamente, Google Analytics para ayudar al website a analizar el uso que hacen los usuarios del sitio web y mejorar la usabilidad del mismo, pero en ningún caso se asocian a datos que pudieran llegar a identificar al usuario. Google Analytics, es un servicio analítico de web prestado por Google, Inc., El usuario puede consultar aquí el tipo de cookies utilizadas por Google.</p>

        <h2>¿Se pueden eliminar las cookies?</h2>
        <p>Sí, y no sólo eliminar, también bloquear, de forma general o particular para un dominio específico.</p>
        <p>Para eliminar las cookies de un sitio web debe ir a la configuración de su navegador y allí podrá buscar las asociadas al dominio en cuestión y proceder a su eliminación.</p>
        <ul>
            <li>Configuración de cookies para <Link href="https://support.google.com/chrome/answer/95647?hl=es" title="Guía configurar cookis Google Chrome" target="_blank">Google Chrome</Link></li>
            <li>Configuración de cookies para <Link href="https://support.apple.com/es-es/HT201265" title="Guía configurar cookis Apple Safari" target="_blank">Apple Safari</Link></li>
            <li>Configuración de cookies para <Link href="https://support.microsoft.com/en-us/windows/delete-and-manage-cookies-168dab11-0753-043d-7c16-ede5947fc64d#ie=ie-10" title="Guía configurar cookis Internet Explorer" target="_blank">Internet Explorer</Link></li>
            <li>Configuración de cookies para <Link href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias?redirectlocale=es&redirectslug=habilitar-y-deshabilitar-cookies-que-los-sitios-we" title="Guía configurar cookis Mozilla Firefox" target="_blank">Mozilla Firefox</Link></li>
        </ul>

        <h2>Más información sobre las cookies</h2>
        <p>Puedes consultar el reglamento sobre cookies publicado por la Agencia Española de Protección de Datos en su “Guía sobre el uso de las cookies” y obtener más información sobre las cookies en Internet, http://www.aboutcookies.org/</p>
        <p>Si desea tener un mayor control sobre la instalación de cookies, puede instalar programas o complementos a su navegador, conocidos como herramientas de “Do Not Track”, que le permitirán escoger aquellas cookies que desea permitir.</p>
        <p>Esta política de cookies ha sido actualizada por última vez el 27-02-2023.</p>
      </div>
    </Layout>
  )
}