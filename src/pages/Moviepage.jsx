import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

export default function Moviepage() {

    const [currentMovie, setCurrentMovie] = useState(null)
    const { id } = useParams()
    const currentId = Number(id)

    useEffect(() => {

        axios(`http://localhost:3000/api/movies/${id}`)
            .then(res => {
                setCurrentMovie(res.data)
            })
            .catch(err => {
                console.log(err)
            }
            )
    }, [id])

    return (
        <>
            {currentMovie &&
                <>
                    <h1 className="text-center my-5">{currentMovie.title}</h1>
                    <div className="container">
                        <div className="row row-col-sm-1 row-cols-md-2">
                            <div className="col">
                                <img src={`../../${currentMovie.image}`} className="p-5" alt="" />
                            </div>
                            <div className="col mb-5 d-flex flex-column justify-content-center align-items-center">
                                <p>directed by: {currentMovie.director}</p>
                                <p>genre: <span>{currentMovie.genre}</span></p>
                                <p>plot: {currentMovie.abstract}</p>
                                <p>release date: {currentMovie.release_year}</p>
                            </div>
                        </div>
                    </div>

                </>
            }
        </>
    )
}