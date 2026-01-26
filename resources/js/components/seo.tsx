import { Head } from '@inertiajs/react';

interface SeoProps {
    title?: string;
    description?: string;
    image?: string;
    imageAlt?: string;
    type?: 'website' | 'article' | 'profile';
    twitterCard?: 'summary' | 'summary_large_image';
    noindex?: boolean;
    children?: React.ReactNode;
}

/**
 * SEO component for setting page-specific metadata.
 *
 * Usage:
 * ```tsx
 * <Seo
 *     title="About Me"
 *     description="Learn more about Joel Christensen"
 *     image="/images/about-og.jpg"
 * />
 * ```
 *
 * All props are optional - defaults are set in the Blade template.
 * The `image` prop should be an absolute URL or a path starting with `/`.
 */
export function Seo({
    title,
    description,
    image,
    imageAlt,
    type = 'website',
    twitterCard = 'summary_large_image',
    noindex = false,
    children,
}: SeoProps) {
    return (
        <Head title={title}>
            {description && (
                <meta head-key="description" name="description" content={description} />
            )}

            {noindex && <meta head-key="robots" name="robots" content="noindex,nofollow" />}

            {/* Open Graph */}
            {type && <meta head-key="og:type" property="og:type" content={type} />}
            {title && <meta head-key="og:title" property="og:title" content={title} />}
            {description && (
                <meta head-key="og:description" property="og:description" content={description} />
            )}
            {image && <meta head-key="og:image" property="og:image" content={image} />}
            {imageAlt && (
                <meta head-key="og:image:alt" property="og:image:alt" content={imageAlt} />
            )}

            {/* Twitter Card */}
            {twitterCard && (
                <meta head-key="twitter:card" name="twitter:card" content={twitterCard} />
            )}
            {title && <meta head-key="twitter:title" name="twitter:title" content={title} />}
            {description && (
                <meta head-key="twitter:description" name="twitter:description" content={description} />
            )}
            {image && <meta head-key="twitter:image" name="twitter:image" content={image} />}
            {imageAlt && (
                <meta head-key="twitter:image:alt" name="twitter:image:alt" content={imageAlt} />
            )}

            {children}
        </Head>
    );
}
