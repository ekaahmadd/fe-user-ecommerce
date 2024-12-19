import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import "./config/i18n-config.ts";
import App from './App.tsx';
import { themeConfig } from './config/theme-config.ts';
import { ThemeProvider } from '@emotion/react';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={themeConfig}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
);
