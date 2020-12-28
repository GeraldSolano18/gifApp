import React, { useContext } from 'react'
import GifsContext from '../context/GifsContext'
import { Gif} from '../components/Gif'




export const Detail = ({params}) => {
    const {gifs}=useContext(GifsContext)
    
    const gif = gifs.find(singleGif => singleGif.id === params.id)

    return(
        <>
        <section className="App-section">
        <Gif {...gif}/>
        <h1>estos son los gif y este es el id {params.id}</h1>
        </section>
        </>
    )
}