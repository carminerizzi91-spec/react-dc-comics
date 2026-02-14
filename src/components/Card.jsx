export default function Card(props) {
    return (
        <div className="comic-card" key={props.id}>
            <img src={props.thumb} alt={props.title} />
            <h4>{props.series}</h4>
        </div>
    )
}