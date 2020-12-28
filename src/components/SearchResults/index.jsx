import React from 'react'
import { ListOfGif } from '../ListOfGif'
import {useGifs} from '../../hooks/useGifs'

//este componente renderiza el resultado de las busquedas 

export const SearchResults = ({ params }) => {
    const { keyword } = params
    const {loading, gifs} = useGifs({keyword})

    return (
        <>
        <section className="App-section">
            {loading ?
                <p>Cargando...</p> :
                <ListOfGif gifs={gifs} />
            }
            </section>
        </>
    )
}