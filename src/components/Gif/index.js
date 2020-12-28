import React from "react"
import {Link} from 'wouter'
import './style.css'

export const Gif = ({ title, id, url }) => {
  return (
    <>
      <div className='Gif_container'>
        <Link className='quitarStyle' to={`/gif/${id}`}>
          <h4 className='Gif_title'>{title}</h4>
            <div className='img_container'>
              <img className='img_gif' src={url} alt="" />
            </div>
        </Link>
      </div>
    </>
  )
}
