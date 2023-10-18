import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../../services/api";
import style from './style.module.css';

function Filme() {

    const { id } = useParams();
    const navigate = useNavigate();
    const [filme, setFilme] = useState({});
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        async function loadFilme() {
            await api.get(`/movie/${id}`, {
                params: {
                    api_key: "603a46083ce79cb27f37e4bf6d6f7b76",
                    language: "pt-BR",
                }
            })
                .then((response) => {
                    console.log(response.data);
                    setFilme(response.data);
                    setLoading(false);
                })
                .catch(() => {
                    console.log('Filme não encontrado');
                    // Abrir em / recarregar true
                    navigate("/", { replace: true });
                    return;
                });
        }
        loadFilme();

        return () => {
            console.log('componente desmontado!');
        }

    }), [navigate, id];


    function salvarFilme() {

        const minhaLista = localStorage.getItem("@primeflix");
        let filmesSalvos = JSON.parse(minhaLista) || [];
        const hasFilme = filmesSalvos.some((filmesSalvo) => filmesSalvo.id === filme.id);

        if (hasFilme === true) {
            toast.warn("Esse filme já está na lista!");
            return;
        }

        filmesSalvos.push(filme);
        localStorage.setItem("@primeflix", JSON.stringify(filmesSalvos));

        toast.success("Filme Salvo com sucesso!");
    }


    if (loading === true) {
        return (
            <div className={style.filmeInfo}>
                <h1>Carregando detalhes...</h1>
            </div>
        );
    }

    return (
        <div className={style.filmeInfo}>

            <h1>{filme.title}</h1>

            <img
                src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`}
                alt={filme.title}
            />

            <h3>Sinopse</h3>
            <span>{filme.overview}</span>

            <strong>Avaliação: {filme.vote_average} / 10 </strong>

            <div className={style.areaButton}>

                <button onClick={salvarFilme}>
                    Salvar
                </button>

                <button>
                    <a
                        // carregar em Nova Guia
                        target="blank"
                        rel="external"
                        href={`https://youtube.com/results?search_query=${filme.title}trailer`}>
                        Trailer
                    </a>
                </button>
            </div>
        </div>
    );
}

export default Filme;