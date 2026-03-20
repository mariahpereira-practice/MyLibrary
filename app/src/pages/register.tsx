import { Alert, Box, Button, Container, TextField, Typography } from "@mui/material";

export function Register() {

    const isError = false;
    const isPending = false;

    return (
        <Container maxWidth="xs">
            <Box sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
            }}>
                <Typography component="h1" variant="h5">
                    Registre sua conta
                </Typography>

                {isError && (
                    <Alert severity="error" sx={{
                    width: "100%",
                    mt: 2
                    }}>Ocorreu um erro ao registrar a conta. Verifique os dados e tente novamente.
                </Alert>
                )}

                <Box component="form" sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        label="Nome de Usuário"
                        // value={username}
                        // onChange={(e) => setUsername(e.target.value)}
                    ></TextField>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        label="Email"
                        type="email"
                        // value={email}
                        // onChange={(e) => setEmail(e.target.value)}
                    ></TextField>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        label="Senha"
                        type="password"
                        // value={password}
                        // onChange={(e) => setPassword(e.target.value)}
                    ></TextField>
                    <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    disabled={isPending}
                    >
                    {isPending ? "Registrando..." : "Registrar"}
                    </Button>
                </Box>
            </Box>
        </Container>
    )
}