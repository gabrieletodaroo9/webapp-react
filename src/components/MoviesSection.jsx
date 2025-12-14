import { Link } from "react-router-dom"
import Card from '../components/Card'

export default function MoviesSection({ movies }) {

    return (
        <>
            <div className="container">
                <h1 className='text-center fw-bold py-5'>Movies</h1>
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
        </>
    )
}