import './App.css'; 
import {BrowserRouter, Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css' 
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Login from './components/Login';
import Home from './components/Home';
import ItemScreen from './components/ItemScreen';
import Profile from './components/Profile';
import Cart from './components/Cart';
import Register	from './components/Register';

function App() {
  return (
	<div className="App-header">
        <ToastContainer 
            autoClose={1500} 
            hideProgressBar={true} />
	 	<BrowserRouter>
	 		<Route exact path="/" component={Login}/>
	 		<Route exact path="/register" component={Register}/>
	 		<Route exact path="/home" component={Home}/>
            <Route path="/item/:id" component={ItemScreen}/>
	 		<Route exact path="/cart" component={Cart}/>
	 		<Route exact path="/profile" component={Profile}/>
	 	</BrowserRouter>
	</div> );

}

export default App;
