import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch,  Route } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import {ReactQueryDevtools} from 'react-query/devtools'
import MovieContextProvider from './contexts/MovieContextProvider'
import Home from './pages/Home';
import Details from './pages/DetailsPage';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, 
      staleTime: 1000 * 1000, 
      keepPreviousData: true
    },
    
  }
})

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
        <MovieContextProvider>
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/details/:type/:id" component={Details} />
            </Switch>
            <ReactQueryDevtools initialIsOpen={false} />
          </BrowserRouter>
        </MovieContextProvider>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

