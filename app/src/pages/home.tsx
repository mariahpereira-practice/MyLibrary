import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import { Headset, ShieldCheck, ShoppingBag, Truck } from "lucide-react";
import { CardFeature } from "../components/Layout/CardFeature";

export function Home() {

    const features = [{
        icon: <Truck size={40} />,
        title: "Entrega Rápida",
        description: "Receba seus livros em casa com nossa entrega rápida e confiável."
    },
    {
        icon: <ShieldCheck size={40} />,
        title: "Compra Segura",
        description: "Compre com confiança em nossa plataforma segura e protegida."
    },
    {
        icon: <Headset size={40} />,
        title: "Suporte ao Cliente",
        description: "Nossa equipe de suporte está pronta para ajudar você a qualquer momento."
    }
]
    return (
        <Box>
            <Paper elevation={1}
            sx={{
                p: {xs: 4, md: 8, lg: 12},
                borderRadius: 4,
                textAlign: "center",
                mb: 6,
                border: "1px solid #333333"
            }}>
                <Typography variant="h2" component="h1" 
                    sx={{
                        fontWeight: 800,
                        color: "primary.main",
                        mb: 2,
                        fontSize: {xs: "2.5rem", md: "3.75rem", lg: "4.5rem"}
                    }}>
                    Minha Livraria
                </Typography>
                <Typography variant="h5" color="text.secondary" sx={{
                    mb:4,
                    maxWidth: "700px",
                    mx: "auto"
                }}>
                    A livraria online que oferece uma vasta seleção de livros para todos os gostos. Encontre seu próximo livro favorito conosco!
                </Typography>
                <Button variant="contained" size="large" 
                startIcon={<ShoppingBag />}
                onClick={() => {}}
                sx={{
                    px:4,
                    py: 1.5,
                    fontSize: "1.1rem",
                    fontWeight: "bold"
                }}>
                    Explorar Livros
                </Button>
            </Paper>
            <Grid container spacing={4}>
                {features.map((feature, index) => (
                    <Grid sx={{
                        flexGrow: 1,
                        flexBasis: "300px"
                    }} key={index}>
                        <CardFeature {...feature} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}