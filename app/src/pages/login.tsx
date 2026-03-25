import { Box, Button, Container, Paper, TextField, Typography } from "@mui/material";

export function Login() {
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
                <Typography
                component="h1"
                variant="h5"
                sx={{
                    fontWeight: 700, 
                    color: "primary.main",
                    textAlign: "center",
                    mb: 3
                }}
                >
                    Acessar Conta
                </Typography>
                <Box component="form" onSubmit={() => {console.log('Login feito.')}}>
                    <TextField
                    margin="normal"
                    required
                    fullWidth
                    label="Email ou Nome de Usuário"
                    autoComplete="email"
                    autoFocus
                    //value={identifier}
                    //onChange={(e) => setIdentifier(e.target.value)}
                    >
                    </TextField>
                    <TextField
                    margin="normal"
                    required
                    fullWidth
                    label="Senha"
                    type="password"
                    autoComplete="current-password"
                    //value={password}
                    //onChange={(e) => setPassword(e.target.value)}
                    >
                    </TextField>
                    <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{
                        mt: 3,
                        py: 1.2,
                        mb: 2
                    }}
                    // disabled={loginMutation.isPending}
                    >
                       {/* {loginMutation.isPending ? 'Entrando...' : 'Entrar'} */}
                       Entrar
                    </Button>
                </Box>
            </Paper>

        </Container>

    </Box>
  )
}