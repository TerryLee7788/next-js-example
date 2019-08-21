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

    return (
        <Head>
            <title>
                {
                    titleTemplate
                        ? (titleTemplate.replace(/%s/, title))
                        : (title)
                }
            </title>
            <meta name="description" content={description} />
            {/* canonical 暫時還沒弄~ 要看一下規範 */}
            <meta property="og:title" content={openGraph.title} />
            <meta property="og:description" content={openGraph.description} />
            {
                openGraph.images && openGraph.images.length
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
