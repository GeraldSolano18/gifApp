import React, {useEffect, useState} from "react"
import getGif from "../../services/getGif";
import { Gif } from "../Gif"

export const ListOfGif = ({keyword}) => {
    const [gif, setGif] = useState([]);

    useEffect(() => {
      getGif({ keyword}).then((gif) => setGif(gif));
    },[keyword]);

  return (
    <>
      {gif.map(({ id, title, url }) => (
        <Gif key={id} title={title} url={url} id={id} />
      ))}
    </>
  )
}
