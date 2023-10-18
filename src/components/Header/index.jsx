import React from "react";
import { Link } from "react-router-dom";
import style from "./style.module.css";

function Header() {
    return (
        <header>
            <Link to='/' className={style.logo}>Prime Flix</Link>
            <Link to='/favoritos' className={style.favoritos}>Meus Filmes</Link>
        </header>
    );
}

export default Header;