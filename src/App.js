import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/header/header.component';
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth } from './firebase/firebase.utils'

class App extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
       currentUser: null,
    }
  }

  unsubscribeFromAuth = null
  
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user })
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  
  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        
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
}

export default App;
