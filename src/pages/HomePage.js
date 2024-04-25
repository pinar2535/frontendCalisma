import { Route, Routes } from 'react-router-dom';
import Login from './LoginRegister/Login';
import Register from './LoginRegister/Register';
import AnaSayfa from './AnaSayfa';
import AnaSayfaIsci from './AnaSayfaIsci';

const HomePage = () => {

    return (
        <Routes>
            <Route path="/" element={<Login></Login>} />
            <Route path="/register" element={<Register />} />
            <Route path="/anasayfa" element={<AnaSayfa />} />
            <Route path="/anasayfaIsci" element={<AnaSayfaIsci />} />
        </Routes>
    );

}

export default HomePage;