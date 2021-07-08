import React from 'react';
import Header from '../header/header';
import { HomePage, CartPage } from '../pages/index'
import { Route, Switch } from 'react-router-dom'
import Footer from '../footer/footer';
import './App.css'

const App = () => {


  return (
    <React.Fragment>
      <Header/>
      <Switch>
        <Route path="/"
        component={HomePage}
        exact />
        <Route path="/cart"
        component = {CartPage}
        exact />
      </Switch>
      <Footer/>
    </React.Fragment>
  )
}

export default App;