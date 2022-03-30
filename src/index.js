import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import "./index.scss";
import Home from "./pages/Home";
import MovieContextProvider from "./MovieContext";
import ActorPage from "./pages/ActorPage";
import MoviePage from "./pages/MoviePage";
import TopRated from "./pages/TopRated";
import Popular from "./pages/Popular";
import GenrePage from "./pages/GenrePage";
import NotFound from "./components/NotFound";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
			staleTime: 1000 * 1000,
			keepPreviousData: true,
		},
	},
});

ReactDOM.render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<MovieContextProvider>
				<BrowserRouter>
					<Navbar />
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/top-rated-movies" component={TopRated} />
						<Route exact path="/popular-movies" component={Popular} />
						<Route exact path="/genre/:name/:id/" component={GenrePage} />
						<Route exact path="/details/Actor/:id" component={ActorPage} />
						<Route exact path="/details/Movie/:id" component={MoviePage} />
						<Route path="/details/Actor/*" component={NotFound} />
						<Route path="*" component={NotFound} />
					</Switch>
					<Footer />
				</BrowserRouter>
			</MovieContextProvider>
		</QueryClientProvider>
	</React.StrictMode>,
	document.getElementById("root")
);
