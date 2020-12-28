import React from "react";
import "./styles.css";
import gif from "../../images/gif.svg";
import { Link } from "wouter";

export const Header = () => {
  return (
    <>
      <div className="content_Header">
        <span className="logo-container">
          <img className="img-logo" src={gif} alt="logo" />
          <h1>Gifs-App</h1>
        </span>
        <ul className='list-menu'>
          <li>
            <Link href="/profiles">Perfil</Link>
          </li>
          <li>
            <Link href="/register">Registrarse</Link>
          </li>
          <li>
            <Link href="/login">Iniciar Sesion </Link>
          </li>
        </ul>
      </div>
    </>
  );
};
