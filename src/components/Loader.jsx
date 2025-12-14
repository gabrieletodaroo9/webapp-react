import { Quantum } from 'ldrs/react'

export default function Loader() {

    return (
        <>
            <div className="d-flex justify-content-center align-items-center vh-100 bg-second">
                <div className="text-dark d-flex flex-column justify-content-center align-items-center">
                    <Quantum size="45" speed="1.75" color="black" />
                    <h1 className="RobotoCondensed fw-1">Loading...</h1>
                </div>
            </div>
        </>
    )
}