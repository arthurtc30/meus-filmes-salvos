import { useEffect, useState } from 'react';
import './filme-info.css';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../../services/api';

// useHistory foi alterado para useNavigate em alguma versão mais nova do react-router-dom
// ao inves de history.replace('/'), foi usado navigate('/')

export default function Filme() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [filme, setFilme] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        
        async function loadFilme() {
            const response = await api.get(`r-api/?api=filmes/${id}`);

            if (response.data.length === 0) {
                navigate('/');
                return;
            }

            setFilme(response.data);
            setLoading(false);
        }

        loadFilme();
        return () => {
            
        }

    }, [navigate, id]);

    const salvaFilme = () => {
        const minhaLista = localStorage.getItem('filmes');
        let filmesSalvos = JSON.parse(minhaLista) || [];

        // procura se o filme já existe nos 'Salvos'
        const temFilme = filmesSalvos.some((filmeSalvo) => filmeSalvo.id === filme.id);

        if (temFilme) {
            alert('Você já salvou este filme'); 
            return;
        }

        filmesSalvos.push(filme);
        localStorage.setItem('filmes', JSON.stringify(filmesSalvos));
        alert('Filme salvo com sucesso!');
    }

    if (loading) {
        return (
            <div className="filme-info">
                <h1>Carregando seu filme...</h1>
            </div>
        );
    }

    return (
        <div className="filme-info">
            <h1>{filme.nome}</h1>
            <img src={filme.foto} alt={filme.nome} />

            <h3>Sinopse</h3>
            {filme.sinopse}

            <div className="botoes">
                <button onClick={ salvaFilme }>Salvar</button>
                <button>
                    <a href={`https://youtube.com/results?search_query=${filme.nome} trailer`} target="blank">
                        Trailer
                    </a>
                </button>
            </div>
        </div>
    );
}
