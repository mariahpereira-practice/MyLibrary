import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { api } from "../services/api";
import { Box, Button, CircularProgress, Paper, Typography } from "@mui/material";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import { CardBook } from "../components/CardBook";

interface Book {
    id: number;
    title: string;
    description: string;
    price: number;
    image?: {
        url: string;
    };
    autor: string;
};

interface ResponseBooks {
    data: Book[];
    meta: {
        pagination: {
            page: number;
            pageSize: number;
            pageCount: number;
            total: number;
        }
    }
}

export function Books() {
     const [searchTerm, setSearchTerm] = useState<string>("");
     const [page, setPage] = useState<number>(1);
     const pageSize = 6;

     const { data, isLoading, isError} = useQuery<ResponseBooks>({
        queryKey: ['products', page, searchTerm],
        queryFn: async () => {
            let url = `/products?populate=image&pagination[page]=${page}&pagination[pageSize]=${pageSize}`;
            if (searchTerm) {
                url += `&filters[$or][0][title][$containsi]=${searchTerm}`;
                url += `&filters[$or][1][description][$containsi]=${searchTerm}`;
            }
            const { data } = await api.get(url);
            return data;
        },
        staleTime: 5 * 1000,
         //placeholderData: (previousData) => previousData
     });

    const verificarSeEstaLogado = () => {
        return false;
    }

    const navigate = useNavigate();

    const adicionarAoCarrinho = (book: Book) => {
        if (!verificarSeEstaLogado()) {
            toast.warning("Você precisa fazer o login para adicionar este item ao seu carrinho.", {toastId: "auth-warning"});
            return;
        }
        toast.success(`Livro "${book.title}" adicionado ao carrinho!`, {toastId: "cart-success"});
        navigate("/cart");

    }
    
    const mostrarCarregandoOuErro = () => {
        if (isLoading) {
            return (
                <Box display="flex" justifyContent="center" py={10}>
                    <CircularProgress />
                </Box>
            );
        }
        
        if (isError) {
            return (
                <Typography color="error" align="center">
                    Erro ao carregar os livros.
                </Typography>
            );
        }
        
        return (
            <Box>
                {data?.data.length === 0 ? (
                    <Typography align="center">
                        Nenhum livro encontrado.
                    </Typography>
                ) : (
                    <Box>
                        <Paper elevation={0} sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: 3,
                            justifyContent: 'center',
                            p: 3,
                            mt: 2,
                            mb: 4,
                        }}>
                        {data?.data.map((book) => {
                            return (
                                <CardBook key={book.id} data={book} adicionarAoCarrinho={() => adicionarAoCarrinho(book)} />
                            )})};
                        </Paper>
                        
                    </Box>
                )}
            </Box>
        );

    };
    
    return (
        <Box>
            {mostrarCarregandoOuErro()}
        </Box>
    );
}