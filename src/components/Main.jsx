import comics from "../data/comics";

export default function Main() {
    return (
        <main className="dc-main">

            {/* JUMBOTRON */}
            <div className="jumbotron"></div>


            {/* CURRENT SERIES + CARDS */}
            <section className="comics-section">
                <div className="comics-container">

                    <h2 className="section-title">CURRENT SERIES</h2>

                    <div className="comics-grid">
                        {comics.map((comic) => (
                            <div className="comic-card" key={comic.id}>
                                <img src={comic.thumb} alt={comic.title} />
                                <h4>{comic.series}</h4>
                            </div>
                        ))}
                    </div>

                    <div className="load-more-wrapper">
                        <button className="load-more">LOAD MORE</button>
                    </div>

                </div>
            </section>

        </main>
    );
}
