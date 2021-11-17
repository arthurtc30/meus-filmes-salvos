import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import Filme from './pages/Filme';
import Favoritos from './pages/Favoritos';
import Erro from './pages/Erro';

const Rotas = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/filme/:id" element={<Filme />} />
                <Route exact path="/favoritos" element={<Favoritos />} />
                <Route path="*" element={<Erro />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Rotas;
