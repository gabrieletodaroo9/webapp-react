import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import SingleMovieDetails from "../components/SingleMovieDetails"
import SingleMovieReviews from "../components/SingleMovieReviews"
import Loader from "../components/Loader"
import ReviewForm from "../components/ReviewForm"

export default function Moviepage() {

    const [currentMovie, setCurrentMovie] = useState(null)
    const { id } = useParams()
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(true)
    const currentId = Number(id)
    useEffect(() => {

        axios(`http://localhost:3000/api/movies/${id}`)
            .then(res => {
                if (currentId > 5 || currentId < 1) {
                    navigate('/error')
                    return;
                }
                setCurrentMovie(res.data)
                setIsLoading(false)

            })
            .catch(err => {
                console.log(err);
                navigate('/error')
            }, [currentId])
    }
    )
    return (
        <>
            {isLoading ? (
                <Loader />
            ) : (
                <main className='bg-second RobotoCondensed'>
                    <div className="container">
                        <SingleMovieDetails currentMovie={currentMovie} />
                        <ReviewForm movieId={currentId} />
                        <SingleMovieReviews currentMovie={currentMovie} />
                    </div >
                </main >
            )
            }
        </>
    )
}