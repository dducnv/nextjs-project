import Head from 'next/head'
import {useRouter} from 'next/router'

export default function Header({title, desc, img, href}) {
    const router = useRouter()
    console.log(router)
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
                <meta httpEquiv="Content-Type" content="text/html; charset=utf-8"/>
                <meta name="description" content={desc}/>
                <meta itemProp="image" content={img}/>
                <link rel="icon" type="image/png"
                      href="https://uploads-ssl.webflow.com/612a3d9cd9c35344a2460d68/61b2181355e88e77082f397d_Myloc.svg"/>
                <link rel="icon" type="image/png"
                      href="https://uploads-ssl.webflow.com/612a3d9cd9c35344a2460d68/61b2181355e88e77082f397d_Myloc.svg"/>
                <meta name="robots"
                      content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"/>
                {/*<link rel="canonical" href={href} />*/}
                <meta name="google" content="nositelinkssearchbox"/>
                <meta property="og:locale" content="vi_VN"/>
                <meta property="og:type" content="article"/>
                <meta property="og:type" content="website"/>
                <meta property="og:title" content={title}/>
                <meta property="og:description"
                      content={desc}/>
                <meta property="og:image" content={desc}/>
                <meta property="og:site_name" content="7th.Dec Hệ Điều Hành"/>

                <meta name="twitter:card" content="summary_large_image"/>
                <meta name="twitter:title" content={title}/>
                <meta name="twitter:description"
                      content={desc}/>
                <meta name="twitter:image" content={img}/>
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-QZ8BL2S9FF"/>

                <script
                    dangerouslySetInnerHTML={{
                      __html: `
                      window.dataLayer = window.dataLayer || [];
                      function gtag(){dataLayer.push(arguments);}
                      gtag('js', new Date());
                      gtag('config', 'G-QZ8BL2S9FF', { page_path: window.location.pathname });
                    `,
                    }}
                />
            </Head>


        </>
    )
}