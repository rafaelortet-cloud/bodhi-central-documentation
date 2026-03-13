import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Banner, Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'

export const metadata = {
    title: "Bodhi Central Documentation",
    description: "The Bodhi Central repository for guidelines, documentation, and technical information about the Bodhi Central project.",
}

const banner = <Banner color="white" storageKey="bodhi-central-1.0-in-development"><a href="https://bodhi-central.vercel.app" target="_blank">Bodhi Central 1.0 is in development 🎉</a></Banner>
const navbar = (
    <Navbar
        logo={<img style={{ width: '10rem' }} src="/bodhi-central-logo-social.png" alt="Bodhi Central logo" />}
    // ... Your additional navbar options
    />
)
const footer = <Footer>Bodhi Central Docs {new Date().getFullYear()} © All rights reserved.</Footer>

export default async function RootLayout({ children }) {
    return (
        <html
            // Not required, but good for SEO
            lang="en"
            // Required to be set
            dir="ltr"
            // Suggested by `next-themes` package https://github.com/pacocoursey/next-themes#with-app
            suppressHydrationWarning
        >
            <Head
            // ... Your additional head options
            >
                {/* Your additional tags should be passed as `children` of `<Head>` element */}
            </Head>
            <body>
                <Layout
                    banner={banner}
                    navbar={navbar}
                    pageMap={await getPageMap()}
                    docsRepositoryBase="https://github.com/shuding/nextra/tree/main/docs"
                    footer={footer}
                // ... Your additional layout options
                >
                    {children}
                </Layout>
            </body>
        </html>
    )
}