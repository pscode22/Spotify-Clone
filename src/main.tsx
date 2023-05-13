import React from 'react';
import { MantineProvider } from '@mantine/core';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        colorScheme: 'dark',
        globalStyles: theme => ({
          body: {
            backgroundColor: theme.colorScheme === 'dark' ? '#242424' : theme.white,
          },
        }),
      }}
    >
      <App />
    </MantineProvider>
  </React.StrictMode>,
);
