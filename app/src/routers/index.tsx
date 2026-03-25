import {Routes, Route} from 'react-router'
import { ProtectedRoute } from './protected-route'
import { Layout } from '../components/Layout'
import { Home } from '../pages/home'
import { Register } from '../pages/register'
import { Login } from '../pages/login'
import { Books } from '../pages/books'

export const Routers = () => {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/books" element={<Books />} />
                <Route path="/books/:id" element={<></>} />
            </Route>
            <Route element={<ProtectedRoute />}>
                <Route path="/cart" element={<>Meu Carrinho</>} />
            </Route>
            
        </Routes>
    )
}