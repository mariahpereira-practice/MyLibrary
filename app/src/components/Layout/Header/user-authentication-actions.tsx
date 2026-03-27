import { Box, Button, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router";

export function UserAuthenticationActions() {

    const isAuthenticated = true;
    const userName = "Heloisa";
    
    if(isAuthenticated) {
        return (
            <Box sx={{display:'flex', gap: 1, ml: 2, 
            flexDirection: {xs: 'column', md: 'row'}, 
            alignItems: {xs: 'stretch', md: 'center'},
            mt:{xs: 1, md: 0},
            mb: {xs: 2, md: 0}}}>
                <Typography variant="body2"
                sx={{display: {xs: 'none', md: 'block'},
                fontSize: {xs: '0.875rem', md: '1rem'}}}
                    > Olá, <strong>{userName}</strong>!
                </Typography>
                <Button 
                color="secondary" 
                variant="contained" 
                size="small" 
                onClick={()=>{
                        console.log("Usuário deslogado");
                }}>Sair
                </Button>
            </Box>
        );
    }

    return (
        <Box sx={{display:'flex', gap: 1, ml: 2, 
            flexDirection: {xs: 'column', md: 'row'}, 
            alignItems: {xs: 'stretch', md: 'center'},
            mt:{xs: 1, md: 0},
            mb: {xs: 2, md: 0}}}>
            <Button color="inherit" variant="outlined" component={RouterLink} to="/login">Entrar</Button>
            <Button color="secondary" variant="contained" component={RouterLink} 
            to="/register">Registrar</Button>
        </Box>
    );

}