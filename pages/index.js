import Image from "next/image";
import styles from "styles/index.module.css";
import Header from "components/header";
import Hero from "components/hero";
import Footer from "components/footer";

export default function Home() {
    return (
        <>
            <Header />
            <main className={styles.main}>
                <Hero />
            </main>
            <Footer />
        </>
    );
}
