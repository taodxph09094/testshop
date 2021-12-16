import './App.css';
import React from "react";
import Header from './component/layouts/Header/Header';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import WebFont from "webfontloader";
import Footer from './component/layouts/Footer/Footer';
import Home from './component/Home/Home';
import Contact from './component/layouts/Contact/Contact';
import About from './component/layouts/About/About';
import ProductDetails from './component/Product/ProductDetails';
import Products from './component/Product/Products';
import Search from './component/Product/Search';
import Login from './component/User/Login';
import store from "./store";
import { loadUser } from './actions/userAction';
import UserOptions from './component/layouts/Header/UserOptions';
import { useSelector } from 'react-redux';
import Profile from './component/User/Profile';
import UpdateProfile from './component/User/UpdateProfile';
import ProtectedRoute from "./component/Route/ProtectedRoute";
import UpdatePassword from './component/User/UpdatePassword';
import ForgotPassword from './component/User/ForgotPassword';
import ResetPassword from './component/User/ResetPassword';
import Cart from './component/Cart/Cart';

function App() {

  const { isAuthenticated, user } = useSelector((state) => state.user);

  React.useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });
    store.dispatch(loadUser());
  }, []);
  return (
    <Router>
      <Header />
      {isAuthenticated && <UserOptions user={user} />}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/product/:id" component={ProductDetails} />
        <Route exact path="/products" component={Products} />
        <Route path="/products/:keyword" component={Products} />
        <Route exact path="/contact" component={Contact} />
         <Route exact path="/about" component={About} />
         <Route exact path="/search" component={Search} />
         <ProtectedRoute exact path="/account" component={Profile} />
         <ProtectedRoute exact path="/me/update" component={UpdateProfile} />
         <ProtectedRoute exact path="/password/update" component={UpdatePassword} />
         <Route exact path="/password/forgot" component={ForgotPassword} />
         <Route exact path="/password/reset/:token" component={ResetPassword} />
         <Route exact path="/login" component={Login} />
         <Route exact path="/cart" component={Cart} />
        </Switch>
      <Footer />
    </Router>

  );
}

export default App;
