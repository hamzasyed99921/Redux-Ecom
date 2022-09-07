import React  from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import './App.css';
import {BrowserRouter, Routes,Route,} from "react-router-dom";
import store from './store';
import {Provider} from 'react-redux'
import Nav from './components/Nav';
import Home from './components/Home';
import Cart from './components/Cart';
import Details from './components/Details';


const App = () => {
    return (
    <div>
        <BrowserRouter>
            <Provider store={store}>
            <Nav/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='cart' element={<Cart/>} />
                <Route path='/details/:id' element={<Details/>}/>
            </Routes>
            </Provider>
        </BrowserRouter>
    </div>
    );
}

export default App;