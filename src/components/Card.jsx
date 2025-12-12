export default function Card({ movie }) {

    return (
        <>
            <div className="card h-100 border-0">
                <div className='img-container'>
                    <img src={`http://localhost:3000/${movie.image}`} alt="" className="card-img-top object-fit-cover" />
                </div>
                <div className="card-body bg-second border-0">
                    <h3 className="text-center">{movie.title}</h3>
                </div>
            </div>
        </>
    )
}