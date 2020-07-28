import React, { useState } from 'react'
import { Header } from '../components/Header'
import { useGifs } from '../hooks/useGifs'
import { SearchResults } from '../components/SearchResults/index'
import { useLocation } from 'wouter'

export const Home = () => {
    const [path, pushLocation] = useLocation()
    const [keyword, setKeyword] = useState('')
    const [loading, gifs] = useGifs()

    const handleSubmit = (e) => {
        e.preventDefault()
        pushLocation(`/search/${keyword}`)
    }

    const handleChange = (e) => {
        setKeyword(e.target.value)
    }

    return (
        <>
            <Header />
            <form className='search_input' onSubmit={handleSubmit}>
                <input placeholder='Buscar...' onChange={handleChange} type="text" value={keyword} />
            </form>
            <section className="App-section">
                <SearchResults params={gifs} />
            </section>
        </>
    )
}

