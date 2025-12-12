export default function Card({ movie }) {

    return (
        <>
            <div className="card h-100">
                <div className='img-container'>
                    <img src={`http://localhost:3000/${movie.image}`} alt="" className="card-img-top object-fit-cover" />
                </div>
                <div className="card-body">
                    <h3>{movie.title}</h3>
                    <p>{movie.abstract}</p>
                    <p></p>
                </div>
            </div>
        </>
    )
}