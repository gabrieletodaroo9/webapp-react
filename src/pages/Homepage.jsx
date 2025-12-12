import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Card from '../components/Card'

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
                                    <Link to={`/${movie.id}`}>
                                        <Card movie={movie} />
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