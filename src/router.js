import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Home } from './pages/Home';
import { Category } from './pages/Category';
import { Product } from './pages/Product';
import { Cart } from './pages/Cart';
import { Finish } from './pages/Finish';
import { Search } from "./pages/Search";
import { Error } from './pages/Error';

import { Header, Footer } from "./components/Main";


export const Routes = () => {
    return (
        <BrowserRouter>
            <Header />
            <div className="container">
                <Switch>
                    <Route path={['/', '/home']} exact component={Home}></Route>
                    <Route path={'/carrinho'} exact component={Cart}></Route>
                    <Route path={'/pesquisa'} exact component={Search}></Route>
                    <Route path={'/finalizar'} exact component={Finish}></Route>
                    <Route path={['/categoria', '/categoria/:id']} exact component={Category}></Route>
                    <Route path={['/produto', '/produto/:id']} exact component={Product}></Route>
                    <Route path='*' exact component={Error}></Route>
                </Switch>
            </div>
            <Footer />
        </BrowserRouter>

    )
}