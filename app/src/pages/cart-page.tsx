import { Alert, Box, Grid, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { fetchCartItems, selectCart } from "../store/slices/cart-slice";
import { CartItemSkeleton } from "../components/Cart/cart-item-skeleton";
import { CartEmpty } from "../components/Cart/cart-empty";
import { useEffect } from "react";
import { useAppDispatch } from "../store";
import { CartSummary } from "../components/Cart/cart-summary";
import { CartItemRow } from "../components/Cart/cart-item-row";

export function CartPage() {

    const {
        itens,
        status,
        error,
        totalAmount,
        totalQuantity,
        processingItemIds
    } = useSelector(selectCart);

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchCartItems());
    }, [dispatch]);

    const isLoading = status == "loading";
    const isFailed = status == "failed";
    const isEmpty = status == "succeeded" && itens.length === 0;
    const hasItems = status == "succeeded" && itens.length > 0;

    return <Box>
        <Typography variant="h4" fontWeight={700} color="primary.main" sx={{
            mb: 4
        }}>
            Meu Carrinho
        </Typography>


        {isFailed && (
            <Alert severity="error" sx={{mb: 3}}>
                {error ?? "Ocorreu um erro ao carregar o carrinho."}
            </Alert>
        )}

        {isLoading && <CartItemSkeleton />}
        {isEmpty && <CartEmpty />}


        {hasItems && 
            <Grid container spacing={3} alignItems="flex-start">
                <Grid size={{xs: 12, md: 8}}>
                    {itens.map((item: any) => 
                        <CartItemRow key={item.id} item={item} 
                        isProcessing={processingItemIds.includes(item.documentId)}
                        onRemove={() => {}}
                        onUpdateQuantity={() => {}}
                         />
                    )}
                </Grid>
                <Grid size={{xs: 12, md: 4}}>
                    <CartSummary totalAmount={totalAmount} totalQuantity={totalQuantity}/>
                </Grid>
            </Grid>
        
        }
    </Box>
}