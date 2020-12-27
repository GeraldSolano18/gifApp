import {useState, useEffect, useContext} from 'react'
import getGifs from '../services/getGif'
import GifsContext from '../context/GifsContext'

//HOOK
export function useGifs ({keyword}={keyword:null}) {
    const [loading, setLoading] = useState(false)
    const {gifs, setGif} = useContext(GifsContext)

    useEffect(() => {
        setLoading(true)
        //obteniendo la keyword del localStorage
        const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'random'
        getGifs({ keyword:keywordToUse })
            .then((gifs) =>{ 
                setGif(gifs)
                setLoading(false)
                //Se guarda la keyword en el localStorage
                localStorage.setItem('lastKeyword', keyword)
            }
            );
    }, [keyword, setGif]);
    return {loading, gifs}

}