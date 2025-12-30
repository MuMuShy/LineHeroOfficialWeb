import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
    title?: string;
    description?: string;
    image?: string;
    url?: string;
    type?: string;
    schema?: Record<string, any>;
}

const SEOHead: React.FC<SEOHeadProps> = ({
    title = "LINE Hero 無盡冒險 | 首款 LINE 聊天室文字 MMORPG",
    description = "【2025最新】免下載、免安裝！在 LINE 聊天室就能玩的 MMORPG。萬人線上共鬥、自由交易、合成神裝。現在加入即送新手大禮包！",
    image = "https://mumu.tw/linehero/official_web/ogimage.png",
    url = "https://linehero.tw",
    type = "website",
    schema
}) => {

    const siteTitle = title.includes("LINE Hero") ? title : `${title} | LINE Hero 無盡冒險`;

    return (
        <Helmet>
            {/* Primary Meta Tags */}
            <title>{siteTitle}</title>
            <meta name="title" content={siteTitle} />
            <meta name="description" content={description} />
            <link rel="canonical" href={url} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:url" content={url} />
            <meta property="og:title" content={siteTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta property="og:site_name" content="LINE Hero 無盡冒險" />
            <meta property="og:locale" content="zh_TW" />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={url} />
            <meta property="twitter:title" content={siteTitle} />
            <meta property="twitter:description" content={description} />
            <meta property="twitter:image" content={image} />
            <meta name="twitter:creator" content="@linehero_tw" />

            {/* Structured Data (JSON-LD) */}
            {schema && (
                <script type="application/ld+json">
                    {JSON.stringify(schema)}
                </script>
            )}

            {/* Default Game JSON-LD */}
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "VideoGame",
                    "name": "LINE Hero 無盡冒險",
                    "alternateName": ["LineHero", "LINE RPG", "LINE 文字遊戲"],
                    "description": "台灣最受歡迎的 LINE 聊天室 MMORPG。結合文字冒險與現代 RPG 系統，免安裝開賴即玩。",
                    "genre": ["MMORPG", "Text Adventure", "Role Playing Game"],
                    "gamePlatform": ["LINE", "Web", "Mobile"],
                    "applicationCategory": "Game",
                    "operatingSystem": "Any",
                    "interactionStatistic": {
                        "@type": "InteractionCounter",
                        "interactionType": "https://schema.org/ActiveAction",
                        "userInteractionCount": 100000
                    },
                    "offers": {
                        "@type": "Offer",
                        "price": "0",
                        "priceCurrency": "TWD",
                        "availability": "https://schema.org/InStock",
                    },
                    "image": "https://mumu.tw/linehero/official_web/ogimage.png",
                    "url": "https://linehero.tw",
                    "author": {
                        "@type": "Organization",
                        "name": "LINE Hero Team",
                        "url": "https://linehero.tw",
                        "sameAs": [
                            "https://line.me/ti/p/@linehero",
                            "https://www.facebook.com/profile.php?id=61564219032805",
                            "https://discord.gg/76gSTeqtBw"
                        ]
                    }
                })}
            </script>

            {/* Organization Structured Data */}
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Organization",
                    "name": "LINE Hero 無盡冒險",
                    "url": "https://linehero.tw",
                    "logo": "https://mumu.tw/linehero/official_web/favi/apple-touch-icon.png",
                    "sameAs": [
                        "https://line.me/ti/p/@linehero",
                        "https://www.facebook.com/profile.php?id=61564219032805",
                        "https://discord.gg/76gSTeqtBw"
                    ]
                })}
            </script>

            {/* Breadcrumb Structured Data */}
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "BreadcrumbList",
                    "itemListElement": [
                        {
                            "@type": "ListItem",
                            "position": 1,
                            "name": "Home",
                            "item": "https://linehero.tw"
                        },
                        {
                            "@type": "ListItem",
                            "position": 2,
                            "name": title,
                            "item": url
                        }
                    ]
                })}
            </script>
        </Helmet>
    );
};

export default SEOHead;
