import Head from "next/head";
import Footer from "../components/Footer/Footer";
import Nav from "../components/Nav/Nav";
import ContextProvider from "../context/context";
import "../styles/globals.scss";
import "../styles/pages/Home/home.scss";
import "../styles/pages/Nav/nav.scss";
import "../styles/pages/Footer/footer.scss";

function MyApp({ Component, pageProps }) {
    return (
        <ContextProvider>
            <Head>
                <title>Shortly ,More than just shorter links</title>
                {/* Links For Every Browser Icon  */}
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/img/icon/apple-touch-icon.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/img/icon/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/img/icon/favicon-16x16.png"
                />
                <link rel="manifest" href="/img/icon/site.webmanifest" />
                <link
                    rel="mask-icon"
                    href="/img/icon/safari-pinned-tab.svg"
                    color="#232127"
                />
                <meta name="msapplication-TileColor" content="#232127" />
                <meta name="theme-color" content="#232127" />

                {/* Meta Tags For SEO */}
                <meta
                    name="title"
                    content="Shortly ,More than just shorter links"
                />
                <meta
                    name="description"
                    content="Free URL shortener to create perfect URLs for your business. Shortly helps you create and share branded links with custom domains at scale."
                />
                {/* Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.shorten-url.tk/" />
                <meta
                    property="og:title"
                    content="Shortly ,More than just shorter links"
                />
                <meta
                    property="og:description"
                    content="Free URL shortener to create perfect URLs for your business. Shortly helps you create and share branded links with custom domains at scale."
                />
                <meta
                    property="og:image"
                    content="/img/illustration-working.svg"
                />
                {/* Twitter */}
                <meta property="twitter:card" content="summary_large_image" />
                <meta
                    property="twitter:url"
                    content="https://www.shorten-url.tk/"
                />
                <meta
                    property="twitter:title"
                    content="Shortly ,More than just shorter links"
                />
                <meta
                    property="twitter:description"
                    content="Free URL shortener to create perfect URLs for your business. Shortly helps you create and share branded links with custom domains at scale."
                />
                <meta
                    property="twitter:image"
                    content="/img/illustration-working.svg"
                />
            </Head>
            <Nav />
            <Component {...pageProps} />
            <Footer />
        </ContextProvider>
    );
}

export default MyApp;
