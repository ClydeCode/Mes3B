import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {Fragment, useState, useEffect} from "react";
import NewsCard from "../components/NewsCard";
import '../styles/index.css';
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';

export default function Index() {
    const [news, setNews] = useState([]);

    const fetchData = () => {
        return fetch(process.env.REACT_APP_WEBAPI + "news")
            .then((response) => response.json())
            .then((data) => setNews(data));
    }

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        if (news.length > 6)
            setNews(news.slice(news.length - 6, news.length))
    }, [news]);

    return (
        <Fragment>
            <Navbar />
            <main>
                <section>
                    <h4>Naujienos</h4>
                    <ul className="news-cards">
                        {news.map(newsItem => {
                            return <NewsCard
                                    key={newsItem.id}
                                    title={newsItem.title}
                                    description={newsItem.description}
                                    imagePath={newsItem.imagePath}
                                    createdDate={newsItem.createdDate}/>
                        })}
                    </ul>
                </section>
            </main>
            {/* <Footer /> */}
        </Fragment>
    )
}