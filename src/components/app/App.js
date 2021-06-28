import React from 'react';
import ListItem from '../list-items/list-item';
import Footer from '../footer/footer';
import Header from '../header/header';
import Cart from '../cart/cart';
import withService from '../hoc/withService'

import ServiceGame from '../../services/service';



const App = () => {
  
  const service = new ServiceGame()
  const data = service.getResource();
  console.log(data.games[1])

  return(
    <React.Fragment>
      <Header/>
      <ListItem/>
      <Cart />
      <Footer/>
    </React.Fragment>
  )
}

export default withService(App);