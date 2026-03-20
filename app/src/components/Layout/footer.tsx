import { Box, Container, Typography } from "@mui/material";

export function Footer() {

    return ( 
        <Box component="footer" sx={{
            bgcolor: 'background.paper',
            py: 3,
            mt: 'auto'
        }}>
            <Container maxWidth="lg" >
                <Typography variant="body2" color="text.secondary" align="center">
                    © {new Date().getFullYear()} Minha Livraria. Todos os direitos reservados.
                </Typography>
                <Typography variant="caption" color="text.secondary" align="center" sx={{
                    display: { xs: 'none', sm: 'block' },
                    mt: 1
                }}>
                   Ícones: Lucide
                </Typography>
            </Container>
        </Box>
    );

};