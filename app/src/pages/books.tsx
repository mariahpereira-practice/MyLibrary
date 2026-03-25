import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { api } from "../services/api";
import { Box, CircularProgress, Typography } from "@mui/material";

interface Book {
    id: number;
    title: string;
    description: string;
    price: number;
    image?: {
        url: string;
    }
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
            {JSON.stringify(data)}
            </Box>
        );

    };
    
    return (
        <Box>
            {mostrarCarregandoOuErro()}
        </Box>
    );
}