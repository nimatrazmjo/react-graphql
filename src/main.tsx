import ReactDOM from 'react-dom/client'
import './index.css';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Router from './router/router';


const client = new ApolloClient({
  uri: 'https://flyby-router-demo.herokuapp.com/',
  cache: new InMemoryCache()
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ApolloProvider client={client}>
    <Router />
  </ApolloProvider>,
)
