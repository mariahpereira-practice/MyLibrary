import {Routes, Route} from 'react-router'
import { ProtectedRoute } from './protected-route'
import { Layout } from '../components/Layout'
import { Home } from '../pages/home'
import { Register } from '../pages/register'

export const Routers = () => {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<>Login</>} />
                <Route path="/register" element={<Register />} />
                <Route path="/books" element={<>Meus Livros</>} />
                <Route path="/books/:id" element={<></>} />
            </Route>
            <Route element={<ProtectedRoute />}>
                <Route path="/cart" element={<>Meu Carrinho</>} />
            </Route>
            
        </Routes>
    )
}