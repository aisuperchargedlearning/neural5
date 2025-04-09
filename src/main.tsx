import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Amplify } from 'aws-amplify';
import App from './App.tsx';
import './index.css';

// Configure Amplify to use your API endpoint
Amplify.configure({
  API: {
    endpoints: [
      {
        name: 'OrdersAPI',
        endpoint: import.meta.env.VITE_API_ENDPOINT || '',
        region: 'us-west-1',
        custom_header: async () => {
          return {
            'Content-Type': 'application/json'
          };
        }
      }
    ]
  }
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
