import { Routes, Route } from 'react-router-dom';
import Cadastro from '../view/screens/Cadastro';
import Login from '../view/screens/Login';
import Home from '../view/screens/Home';
import Preferencia from '../view/components/Preferencias'
import DetalhesObraLiteraria from '../view/screens/DetalhesObraLiteraria'
import DetalhesObraEstetica from '../view/screens/DetalhesObraEstetica'
import EditarPerfil from '../view/screens/EditarPerfil';
import Perfil from '../view/screens/Perfil';
import MeusFavoritos from '../view/screens/MeusFavoritos';
import MinhasCompras from '../view/screens/MinhasCompras';
import RecoverPassword from '../view/screens/RecoverPassword';
import Store from '../view/screens/Store'
import { Capitulo } from '../view/screens/Capitulo';

export const Screens = () => {
    return (
        <Routes>
            <Route path={'/'} element={<Home />} />
            <Route path={'/login'} element={<Login />} />
            <Route path={'/register'} element={<Cadastro />} />
            <Route path={'/preference'} element={<Preferencia />} />
            <Route path={'/artworkLiteraryDetails/:id'} element={<DetalhesObraLiteraria />} />
            <Route path={'/artworkAestheticDetails/:id'} element={<DetalhesObraEstetica />} />
            <Route path={'/editar-perfil'} element={<EditarPerfil />} />
            <Route path={'/perfil/:id'} element={<Perfil />} />
            <Route path={'/meus-favoritos'} element={<MeusFavoritos />} />
            <Route path={'/minhas-compras'} element={<MinhasCompras />} />   
            <Route path={'/recover-password'} element={<RecoverPassword />} />   
            <Route path={'/loja'} element={<Store/> } />
            <Route path={'/capitulo'} element={<Capitulo />} />
        </Routes>
    );
}