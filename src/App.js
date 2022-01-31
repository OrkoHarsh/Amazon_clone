import React from "react";
import "./App.css";
import Headder from './Headder';
import Home from "./Home"
import  { BrowserRouter as Router,Switch, Route } from "react-router-dom";
import Footer from "./Footer";
import Checkout from "./Checkout";
import DailyEssentials from "./DailyEssentials";
import KitchenEssentials from "./KitchenEssentials";



function App(){
    return(

        <Router>
        <div className="app">
            <Headder/>
            <Switch>
                <Route path="/checkout">
                    
                    <Checkout />
                    <Footer/>
                </Route>
                <Route path="/sign in">
                  <h1>LOGIN PAGE</h1>  
                </Route>
                <Route path="/KitchenEssentials">
                    
                     <KitchenEssentials/> 
                    <Footer/>
                </Route>
                <Route path="/DailyEssentials"> 
                    <DailyEssentials/>
                <Footer/>
                </Route>
                <Route path="/">
                    
                    <Home />
                    <Footer/>
                </Route>
            </Switch>
        </div>
        </Router>
    );
}

export default App;