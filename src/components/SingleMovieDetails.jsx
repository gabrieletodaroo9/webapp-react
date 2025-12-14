import { Link } from "react-router-dom"

export default function SingleMovieDetails({ currentMovie }) {

    return (
        <>
            <div className="row row-col-sm-1 row-cols-md-2">
                <div className="col movie-page">
                    <img src={`http://localhost:3000/${currentMovie.image}`} className="p-5 " alt="" />
                </div>
                <div className="col mb-5 d-flex justify-content-center align-items-center">
                    <div className="card">
                        <h1 className="text-center py-3 fw-bold card-header">{currentMovie.title.toUpperCase()}</h1>
                        <div className="card-body">
                            <p className="fs-4"> <strong>Directed by:</strong> {currentMovie.director}</p>
                            <p className="fs-4"> <strong>Genre:</strong>  <span>{currentMovie.genre}</span></p>
                            <p className="fs-4"><strong>Plot:</strong> {currentMovie.abstract}</p>
                            <p className="fs-4"> <strong> Release date:</strong>  {currentMovie.release_year}</p>
                            <div className="d-flex justify-content-center">
                                <Link to='/'>
                                    <strong className="fs-2 btn btn-dark text-white px-4 py-2 rounded-pill mt-5">Torna alla home</strong>
                                </Link>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}