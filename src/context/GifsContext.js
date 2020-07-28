import React, {useState} from 'react'
import { Detail } from '../pages/Detail'

const Context = React.createContext({})

export function GifsContextProvider({children}) {
    const [gifs,setGifs] =useState([])

    return<Context.Provider value={{gifs,setGifs}}>
        {children}
    </Context.Provider>
}

export default Context