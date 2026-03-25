import { Alert, Box, Button, Container, Paper, TextField, Typography } from "@mui/material";

export function Register() {

    const isError = false;
    const isPending = false;

    return (
        <Box sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
        <Container maxWidth="xs">
            <Paper 
            elevation={0}
            sx={{
            p: {xs: 3, sm: 4},
                borderRadius: 3,
                animation: 'fadeIn 0.5s',
                "@keyframes fadeIn": {
                    from: { opacity: 0, transform: "scale(0.95)" },
                    to: { opacity: 1, transform: "scale(1)" }
                }
            }}>
                <Typography component="h1" variant="h5"
                sx={{
                    fontWeight: 700, 
                    color: "primary.main",
                    textAlign: "center",
                    mb: 3
                }}>
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
                        autoFocus
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
            </Paper>
        </Container>
    </Box>
    
    )
}