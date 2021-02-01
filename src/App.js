import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import React, { useEffect, useState } from 'react'
import SigninPage from './pages/signin';
import SignupPage from './pages/signup';


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
      </Switch>
    </Router>
  );
}

export default App;
