import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router";
import { Book} from 'lucide-react';

export function Header() {
    
    const isAuthenticated = false;
    const userName = "Heloisa";
    
    return (
        <AppBar position="static" elevation={1}>
            <Toolbar>

                <Box>
                    <Typography variant="h6" component={Link} to="/" sx={{
                        textDecoration: 'none',
                        color: 'inherit',
                        fontWeight: 700,
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1
                    }}>
                        <Book/>
                            Minha Livraria
                    </Typography>
                </Box>

                <Box sx={{display: 'flex', alignItems: 'center', gap: 2, flexGrow: 1, justifyContent: 'center'}}>
                    <Button color="inherit"component={Link} to="/books">Livros</Button>
                    <Button color="inherit"component={Link} to="/cart">Meu Carrinho</Button>
                </Box>

                <Box sx={{display: 'flex', alignItems: 'center', gap: 2, borderLeft: '1px solid rgba(255,255,255,0.3)', paddingLeft: 2}}>
                    {isAuthenticated ? (
                        <>
                            <Typography variant="body1">Olá, <strong>{userName}</strong>!</Typography>
                            <Button color="secondary" variant="contained" size="small" onClick={()=>{
                                console.log("Usuário deslogado");
                            }}>Sair</Button>
                        </>
                    ) : (
                        <>
                            <Button color="inherit" variant="outlined" component={Link} to="/login">Entrar</Button>
                            <Button color="info" variant="contained" component={Link} to="/register">Registrar</Button>
                        </>
                    )}
                </Box>

            </Toolbar>
        </AppBar>
    );
}