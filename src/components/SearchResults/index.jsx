import React from 'react'
import { ListOfGif } from '../ListOfGif'
import {useGifs} from '../../hooks/useGifs'

export const SearchResults = ({ params }) => {
    const { keyword } = params
    const {loading, gifs} = useGifs({keyword})

    return (
        <>
            {loading ?
                <p>Cargando...</p> :
                <ListOfGif gifs={gifs} />
            }
        </>
    )
}