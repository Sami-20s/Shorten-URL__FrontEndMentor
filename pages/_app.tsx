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
                <title>Shortly</title>
            </Head>
            <Nav />
            <Component {...pageProps} />
            <Footer />
        </ContextProvider>
    );
}

export default MyApp;
