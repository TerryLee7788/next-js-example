import React from 'react';
import Head from 'next/head';

/**
 * config 設置參考: (持續更新...)
 *  https://github.com/garmeeh/next-seo#nextseo-options
 */

const SeoMeta = (props) => {

    const {
        title,
        titleTemplate,
        description,
        canonical,
        openGraph
    } = props.config;

    const pageTitle = titleTemplate
        ? (titleTemplate.replace(/%s/, title))
        : (title)

    const ogTitle = openGraph && openGraph.title ? openGraph.title : pageTitle
    const ogDescription = openGraph && openGraph.description ? openGraph.description : description

    return (
        <Head>
            <title>{pageTitle}</title>
            <meta name="description" content={description} />
            {/* canonical 暫時還沒弄~ 要看一下規範 */}
            <meta property="og:title" content={ogTitle} />
            <meta property="og:description" content={ogDescription} />
            {
                openGraph && openGraph.images && openGraph.images.length
                    ? (
                        openGraph.images.map((image, idx) => (
                            <meta
                                key={idx}
                                property="og:image"
                                content={image.url}
                            />
                        ))
                    )
                    : (null)
            }
        </Head>
    );

};

export default SeoMeta;
