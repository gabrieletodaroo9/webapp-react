export default function StarVote(vote) {

    function getStarsVote({ vote }) {
        let stars = []
        for (let i = 1; i <= vote; i++) {
            stars.push(<i className="bi bi-star-fill text-warning fs-5" key={`bi-fill${i}`}></i>)
        }
        for (let i = 1; i <= 5 - vote; i++) {
            stars.push(<i className="bi bi-star fs-5" key={`bi${i}`}></i>)
        }
        return stars
    }

    return (
        <span className="pe-4 d-flex gap-1">
            {getStarsVote(vote)}
        </span>
    )
}