import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { StyledEngineProvider } from '@mui/material/styles';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const API_URL=process.env.REACT_APP_API_URL || process.env.RENDER_API_URL;

if (!API_URL) console.log('REACT_APP_API_URL env variable is missing.');
const client = new ApolloClient({
  uri: API_URL, 
  cache: new InMemoryCache(),
});

root.render(
  <ApolloProvider client={client}>
    <StyledEngineProvider injectFirst>
      <App />
    </StyledEngineProvider>
  </ApolloProvider>,
);
