import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Fragment } from "react";
import NewsCard from "../components/NewsCard";
import '../styles/index.css';
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';

export default function Index() {
    return (
        <Fragment>
            <Navbar />
            <main>
                <section>
                    <h4>Naujienos</h4>
                    <ul className="news-cards">
                        <NewsCard />
                        <NewsCard />
                        <NewsCard />
                        <NewsCard />
                        <NewsCard />
                        <NewsCard />
                    </ul>
                </section>
            </main>
            {/* <Footer /> */}
        </Fragment>
    )
}