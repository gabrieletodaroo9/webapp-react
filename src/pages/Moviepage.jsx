import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import SingleMovieDetails from "../components/SingleMovieDetails"
import SingleMovieReviews from "../components/SingleMovieReviews"

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

                    <main className='bg-second'>
                        <div className="container">
                            <SingleMovieDetails currentMovie={currentMovie} />
                            <SingleMovieReviews currentMovie={currentMovie} />
                        </div>
                    </main>
                </>
            }
        </>
    )
}