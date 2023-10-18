import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from '../../services/api';
import style from './style.module.css';

//Url da api:https://api.themoviedb.org/3/movie/now_playing?api_key=603a46083ce79cb27f37e4bf6d6f7b76


function Home() {

    const [filmes, setFilmes] = useState([]);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadFilmes() {
            const response = await api.get("/movie/now_playing", {
                params: {
                    api_key: "603a46083ce79cb27f37e4bf6d6f7b76",
                    language: "pt-BR",
                    page: 1,
                }
            });

            //console.log(response.data.results.slice(0, 10));
            setFilmes(response.data.results.slice(0, 20));

            setLoading(false);
        }

        loadFilmes();

    }, []);

    if (loading === true) {
        return (
            <div className={style.loading}>
                <h2>Carregando filmes...</h2>
            </div>
        );
    }

    return (
        <div className={style.container}>
            <div className={style.listaFilmes}>
                {filmes.map((filme) => {
                    return (
                        <article key={filme.id}>
                            <strong>{filme.title}</strong>
                            <img
                                src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`}
                                alt={filme.title}
                            />
                            <Link
                                to={`/filme/${filme.id}`}>
                                Acessar
                            </Link>
                        </article>
                    );
                })}
            </div>
        </div>
    );
}

export default Home;