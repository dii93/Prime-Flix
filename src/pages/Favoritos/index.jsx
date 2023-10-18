import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import style from "./style.module.css";

function Favoritos() {

    const [filmes, setFilmes] = useState([]);

    useEffect(() => {
        const minhaLista = localStorage.getItem("@primeflix");
        setFilmes(JSON.parse(minhaLista) || []);
        // .parse converte em um array
        // .stringify converte em string 
    }, []);

    function excluirFilme(id) {

        let filtroFilmes = filmes.filter((item) => {
            return (item.id !== id);
        })

        setFilmes(filtroFilmes);
        localStorage.setItem("@primeflix", JSON.stringify(filtroFilmes));
        toast.success("Filme removido com sucesso!");
    }


    return (
        <div className={style.meusFilmes}>
            <h1>Meus Filmes</h1>

            {filmes.length === 0 && <span>Voçê não possui nenhum filme salvo :(</span>}

            <ul>
                {filmes.map((filme) => {
                    return (
                        <li key={filme.id}>
                            <span>{filme.title}</span>
                            <div>
                                <Link to={`/filme/${filme.id}`}>Ver Detalhes</Link>
                                <button
                                    className={style.btn}
                                    onClick={() => excluirFilme(filme.id)}>
                                    Excluir
                                </button>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default Favoritos;