import React from 'react';
import ListItem from '../list-items/list-item';
import Footer from '../footer/footer';
import Header from '../header/header';
import Cart from '../cart/cart';






const App = () => {
  return (
    <React.Fragment>
      <Header/>
      <ListItem/>
      <Cart/>
      <Footer/>
    </React.Fragment>
  )
}

export default App;