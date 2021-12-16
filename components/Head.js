import Head from 'next/head'
export default function Header({title,desc,img,}){
    return(
        <>
        <Head>
            <title>Hình ảnh thiên văn trong ngày</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
            <meta name="description" content={desc}/>
            <meta itemProp="image" content={img}/>
            <link rel="icon" type="image/png"
                  href="https://uploads-ssl.webflow.com/612a3d9cd9c35344a2460d68/61b2181355e88e77082f397d_Myloc.svg"/>
            <link rel="icon" type="image/png"
                  href="https://uploads-ssl.webflow.com/612a3d9cd9c35344a2460d68/61b2181355e88e77082f397d_Myloc.svg"/>
            <meta property="og:type" content="website"/>
            <meta property="og:title" content={title}/>
            <meta property="og:description"
                  content={img}/>
            <meta property="og:image" content={desc}/>


            <meta name="twitter:card" content="summary_large_image"/>
            <meta name="twitter:title" content={title}/>
            <meta name="twitter:description"
                  content={desc}/>
            <meta name="twitter:image" content={img}/>
        </Head>
        </>
    )
}