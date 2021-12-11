import './App.css';
import React from "react";
import Header from './component/layouts/Header/Header';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import WebFont from "webfontloader";
import Footer from './component/layouts/Footer/Footer';
import Home from './component/Home/Home';
import Contact from './component/layouts/Contact/Contact';
import About from './component/layouts/About/About';



function App() {
  React.useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });
  }, []);
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/contact" component={Contact} />
         <Route exact path="/about" component={About} />
        </Switch>
      <Footer />
    </Router>

  );
}

export default App;
