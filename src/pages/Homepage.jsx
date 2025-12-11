import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Homepage() {

    const [movies, setMovies] = useState([])

    useEffect(() => {

        axios.get('http://localhost:3000/api/movies')
            .then(res => {
                setMovies(res.data)
            })
    }, [])

    return (
        <>
            <main>
                <div className="container">
                    <h1 className='text-center my-5'>Best Movies</h1>
                    <div className="row row-cols-sm-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-5 g-4">
                        {
                            movies.map(movie =>
                                <div key={movie.id} className="col mb-5">
                                    <Link to='/contacts'>
                                        <div className="card h-100">
                                            <div className='img-container'>
                                                <img src={`../../${movie.image}`} alt="" className="card-img-top object-fit-cover" />
                                            </div>
                                            <div className="card-body">
                                                <h3>{movie.title}</h3>
                                                <p>{movie.abstract}</p>
                                                <p></p>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            )
                        }
                    </div>
                </div>
            </main>

        </>
    )
}