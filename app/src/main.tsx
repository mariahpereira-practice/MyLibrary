import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import CssBaseline from '@mui/material/CssBaseline';
import { CustomThemeProvider } from './theme.tsx';

createRoot(document.getElementById('root')!).render(
  <CustomThemeProvider>
    <CssBaseline />
    <App />
  </CustomThemeProvider>
)
