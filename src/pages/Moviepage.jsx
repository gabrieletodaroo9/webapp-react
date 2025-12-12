import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import StarVote from "../components/StarVote"

export default function Moviepage() {

    const [currentMovie, setCurrentMovie] = useState(null)
    const { id } = useParams()

    useEffect(() => {

        axios(`http://localhost:3000/api/movies/${id}`)
            .then(res => {
                setCurrentMovie(res.data)
            })
            .catch(err => {
                console.log(err)
            }
            )
    }, [])

    return (
        <>
            {currentMovie &&
                <>

                    <div className="container">
                        <div className="row row-col-sm-1 row-cols-md-2">
                            <div className="col movie-page">
                                <img src={`http://localhost:3000/${currentMovie.image}`} className="p-5 " alt="" />
                            </div>
                            <div className="col mb-5 d-flex flex-column justify-content-center align-items-center">
                                <h1 className="text-center my-5 fw-bold">{currentMovie.title}</h1>
                                <p>Directed by: {currentMovie.director}</p>
                                <p>Genre: <span>{currentMovie.genre}</span></p>
                                <p>Plot: {currentMovie.abstract}</p>
                                <p>Release date: {currentMovie.release_year}</p>
                                <Link to='/'>
                                    <strong className="fs-2 btn btn-dark text-white px-4 py-2 rounded-pill mt-5">Torna alla home</strong>
                                </Link>
                            </div>
                        </div>
                        <hr />
                        <div className="reviews-container">
                            <h2 className="text-center">Reviews</h2>

                            {
                                currentMovie.reviews?.map(review =>
                                    <div key={review.id} className="card my-5 p-3">
                                        <h3>{review.name}</h3>
                                        <p>{review.text}</p>
                                        <StarVote vote={review.vote} />

                                    </div>
                                )
                            }

                        </div>
                    </div>




                </>
            }
        </>
    )
}