import React, { useState } from 'react'
import { Header } from '../components/Header'
import { useGifs } from '../hooks/useGifs'
import bg from '../images/bg.svg'
import { SearchResults } from '../components/SearchResults/index'
import { useLocation } from 'wouter'

export const Home = () => {
    const [path, pushLocation] = useLocation()
    const [keyword, setKeyword] = useState('')
    const {loading, gifs} = useGifs()

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
            <div className='wrapper'>
                <div className='presentacion'>
                    <img className='bg-img' src={bg} alt=""/>
                    <div>
                        <h1>WELCOME</h1>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex nihil perspiciatis, neque deleniti necessitatibus nostrum laborum rerum sunt perferendis nobis vero cupiditate quia, vel at delectus fuga temporibus deserunt mollitia?
                    </div>

                </div>
            <form className='search_input' onSubmit={handleSubmit}>
                <input placeholder='Buscar...' onChange={handleChange} type="text" value={keyword} />
            </form>
            <section className="App-section">
                <SearchResults params={gifs} />
            </section>
            </div>

        </>
    )
}

