import StarVote from "../components/StarVote"

export default function SingleMovieReviews({ currentMovie }) {

    return (
        <>
            <hr />
            <div className="reviews-container pb-5">
                <h2 className="text-center pt-3 fw-bold">Users reviews</h2>

                {
                    currentMovie.reviews?.map(review =>
                        <div key={review.id} className="card mt-5 p-3 bg-third">
                            <div className="d-flex justify-content-between align-items-center">
                                <h4 className="pe-5 mb-4"><i className="bi bi-person-circle fs-4 pe-2"></i>{review.name}</h4>
                                <StarVote vote={review.vote} />
                            </div>
                            <p>{review.text}</p>


                        </div>
                    )
                }

            </div>
        </>
    )
}