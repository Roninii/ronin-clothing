import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/header/header.component';
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

function App() {
  return (
    <div>
      <Header />
      
      <main>
        <Switch>
          <Route path='/signin' component={SignInAndSignUp} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/' component={Homepage} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
