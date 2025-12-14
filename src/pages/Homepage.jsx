import axios from 'axios'
import { useEffect, useState } from 'react'
import SocialSection from '../components/SocialSection'
import MoviesSection from '../components/MoviesSection'
import Loader from '../components/Loader'
import 'ldrs/react/Quantum.css'

export default function Homepage() {

    const [movies, setMovies] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {

        axios.get('http://localhost:3000/api/movies')
            .then(res => {
                setMovies(res.data)
                setIsLoading(false)
            })
    }, [])

    return (
        <>{isLoading ? (
            <Loader />
        ) : (
            <main className='bg-second pb-5'>
                <MoviesSection movies={movies} />
                <SocialSection />
            </main>
        )
        }
        </>
    )
}