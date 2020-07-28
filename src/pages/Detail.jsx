import React, { useContext } from 'react'
import GifsContext from '../context/GifsContext'
export const Detail = ({params}) => {
    const {gifs} =useContext(GifsContext)
    console.log(gifs)
    return(
        <>
        <h1>estos son los gif y este es el id {params.id}</h1>
        </>
    )
}