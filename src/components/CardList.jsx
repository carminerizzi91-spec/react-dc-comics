import comics from "../data/comics";
import Card from "./Card";


export default function CardList(props) {
    {/* CURRENT SERIES + CARDS */ }
    return (
        <section className="comics-section">
            <div className="comics-container">

                <h2 className="section-title">{props.titolo}</h2>

                <div className="comics-grid">
                    {comics.map((comic) => (
                        <Card
                            key={comic.id}
                            id={comic.id}
                            thumb={comic.thumb}
                            title={comic.title}
                            series={comic.series}
                        />

                    ))}
                </div>

                <div className="load-more-wrapper">
                    <button className="load-more">LOAD MORE</button>
                </div>

            </div>
        </section>
    )
}