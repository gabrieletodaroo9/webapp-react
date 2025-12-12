export default function StarVote(vote) {

    function getStarsVote({ vote }) {
        let stars = []
        for (let i = 1; i <= vote; i++) {
            stars.push(<i className="bi bi-star-fill" key={`bi-fill${i}`}></i>)
        }
        for (let i = 1; i <= 5 - vote; i++) {
            stars.push(<i className="bi bi-star" key={`bi${i}`}></i>)
        }
        return stars
    }

    return (
        <div>
            {getStarsVote(vote)}
        </div>
    )
}