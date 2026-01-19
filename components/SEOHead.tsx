import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
    title?: string;
    description?: string;
    keywords?: string;
    image?: string;
    url?: string;
    type?: string;
    schema?: Record<string, any>;
}

const SEOHead: React.FC<SEOHeadProps> = ({
    title = "LINE Hero 無盡冒險 | 免下載安裝 LINE 即玩 RPG | 聊天視窗直接開戰",
    description = "【2026最新】打開 LINE 就能玩的 RPG！免下載、免安裝，在聊天視窗體驗完整 MMORPG。結合 LIFF 視覺技術打造精美介面，保留經典文字冒險的深度敘事。現在加入即送新手大禮包！",
    keywords,
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
            {keywords && <meta name="keywords" content={keywords} />}
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
                    "alternateName": ["LineHero", "免下載 LINE RPG", "聊天視窗 RPG", "LINE 即玩 RPG", "LINE 文字冒險遊戲"],
                    "description": "免下載、免安裝的 LINE 即玩 RPG。打開 LINE 聊天視窗就能開始冒險，結合 LIFF 視覺技術打造精美介面，保留經典文字冒險的深度敘事體驗。",
                    "genre": ["MMORPG", "Chat RPG", "Text Adventure", "Role Playing Game"],
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
