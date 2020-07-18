import React from "react"
import './style.css'

export const Gif = ({ title, id, url }) => {
  return (
    <>
      <div className='Gif_container'>
        <h4 className='Gif_title'>{title}</h4>
        <img src={url} alt="" />
      </div>
    </>
  )
}
