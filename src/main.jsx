import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { Providers } from './providers';
import { initializeLocalStorage } from './lib/localStorageService';

initializeLocalStorage();


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Providers>
      <App />
    </Providers>
  </StrictMode>
);
