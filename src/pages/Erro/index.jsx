import React from "react";
import { Link } from "react-router-dom";
import style from './style.module.css';

function Erro() {
    return (
        <div className={style.notFound}>
            <h1>404</h1>
            <h2>Página não encontrada!</h2>
            <Link to={'/'}> Veja Todos os Filmes </Link >
        </div>
    );
}

export default Erro;