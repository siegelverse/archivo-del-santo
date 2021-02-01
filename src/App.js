import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import React, { useEffect, useState } from 'react'
import SigninPage from './pages/signin';
import SignupPage from './pages/signup';
import Movie1Page from './pages/movie1';
import Movie2Page from './pages/movie2';
import Movie3Page from './pages/movie3';
import Movie4Page from './pages/movie4';


function App() {
  const [user, setUser] = useState(null)
  
  const fetchUser = () => {
    fetch('http://localhost:3000/users/me', {
      headers: {
        'Authorization': `Bearer ${localStorage.token}`
      }
    })
    .then(res => res.json())
    .then(user => {
      setUser(user)
    })
  }
  useEffect(() => {
    fetchUser()
  }, [])
  console.log(user)
  
  return (
    <Router>
      <Switch>
        <Route path='/' render={() => <Home user={user} />} exact />
        <Route path='/signin' component={SigninPage} />
        <Route path='/signup' component={SignupPage} />
        <Route path='/watch/s-v-estrang' component={Movie1Page} />
        <Route path='/watch/s-v-hacha' component={Movie2Page} />
        <Route path='/watch/s-v-villanos' component={Movie3Page} />
        <Route path='/watch/s-v-zomb' component={Movie4Page} />
      </Switch>
    </Router>
  );
}

export default App;
