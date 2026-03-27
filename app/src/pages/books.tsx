import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { api } from "../services/api";
import { Box } from "@mui/material";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import { BookList } from "../components/BookList";
import type { Book, ResponseBooks } from "../types";

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
        staleTime: 30 * 1000,
         placeholderData: (previousData) => previousData
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
        return (
            <BookList data={data} isLoading={isLoading} isError={isError} page={page} setPage={setPage} debounceSearch={searchTerm} />
        );

    };
    
    return (
        <Box>
            {mostrarCarregandoOuErro()}
        </Box>
    );
}