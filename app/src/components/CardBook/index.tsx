import { Box, Button, Container, Typography } from "@mui/material";
import { useState } from "react";

interface CardBookProps {
    data: {
        id: number;
        title: string;
        description: string;
        price: number;
        autor: string;
        image?: {
            url: string;
        };
    };
    adicionarAoCarrinho: () => void;
}

export function CardBook({ data, adicionarAoCarrinho }: Readonly<CardBookProps>) {
    const imageUrl = `http://localhost:1337${data.image?.url}`;
    const [isTall, setIsTall] = useState<boolean | null>(null);

    const handleImgLoad = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
        const img = e.currentTarget;
        setIsTall(img.naturalHeight > 300);
    };

    return (
        <Box width={500} height='auto' p={2} boxShadow={3} display="flex" flexDirection="column" alignItems="center"
            border={1} borderRadius={5} sx={{ backgroundColor: 'background.default' }}>
            <Box
                sx={{
                    width: 300,
                    height: 400,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#fff',
                    mb: 2,
                    overflow: 'hidden',
                    borderRadius: 2,
                    border: '2px solid',
                    borderColor: 'primary.main',
                }}
            >
                {imageUrl && (
                    <img
                        src={imageUrl}
                        alt={data.title}
                        onLoad={handleImgLoad}
                        style={{
                            width: 'auto',
                            height: isTall? 'auto' : '100%',
                            maxHeight: '100%',
                            maxWidth: '100%',
                            objectFit: isTall ? 'cover' : 'contain',
                            display: 'block',
                            margin: isTall ? 0 : 'auto',
                        }}
                    />
                )}
            </Box>
            <Typography variant="h5" sx={{ mt: 'auto', mb: 2 }}>{data.title}</Typography>
            <Typography variant="body1" color="textSecondary" sx={{ mb: 2 }}>Autor: {data.autor}</Typography>
            {data.description.length > 200? (
                <Typography variant="body1" color="textSecondary" sx={{mb: 2}}>
                    {data.description.substring(0, 200) + '...' + ' Ver mais'}
                </Typography>
            ) : (
                <Typography variant="body1" color="textSecondary">
                    {data.description}
                </Typography>
            )}
            <Button variant="outlined" color="primary" fullWidth sx={{ mt: 'auto', width: '91%' }} onClick={() => {}}>
                Ver mais detalhes
            </Button>
            <Container sx={{display: 'flex', flexDirection: 'row', gap: 2, mt: 1, width: '100%'}}>
                <Typography variant="subtitle1" color="primary" sx={{ mt: 2.7 }}>{data.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</Typography>
                <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }} onClick={adicionarAoCarrinho}>
                    Acrescentar ao Carrinho
                </Button>
            </Container>
        </Box>
    )
}