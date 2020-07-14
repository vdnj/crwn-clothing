import React from 'react';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';

import './App.css';
import { Switch, Route } from 'react-router-dom';


function App() {
  return(
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage}/>
      </Switch>
    </div>
  )

  return <HomePage/>;
}

export default App;
