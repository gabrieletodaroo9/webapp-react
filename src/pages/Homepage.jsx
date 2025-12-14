import axios from 'axios'
import { useEffect, useState } from 'react'
import SocialSection from '../components/SocialSection'
import MoviesSection from '../components/MoviesSection'

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
            <main className='bg-second pb-5'>
                <MoviesSection movies={movies} />
                <SocialSection />
            </main>

        </>
    )
}