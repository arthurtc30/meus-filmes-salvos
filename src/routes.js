import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import Filme from './pages/Filme';

const Rotas = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/filme/:id" element={<Filme />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Rotas;
