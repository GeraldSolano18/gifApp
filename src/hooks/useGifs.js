import {useState, useEffect} from 'react'
import getGifs from '../services/getGif'

export function useGifs ({keyword}={keyword:null}) {
    const [loading, setLoading] = useState(false)
    const [gifs, setGif] = useState([])

    useEffect(() => {
        setLoading(true)
        //obteniendo la keyword del localStorage
        const keywordToUse = keyword || localStorage.getItem('lastKeyword')
        getGifs({ keyword })
            .then((gifs) =>{ 
                setGif(gifs)
                setLoading(false)
                //Se guarda la keyword en el localStorage
                localStorage.setItem('lastKeyword', keyword)
            }
            );
    }, [keyword]);
    return [loading, gifs]

}