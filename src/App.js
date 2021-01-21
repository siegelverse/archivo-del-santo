import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import Home from './pages';

function App() {
  return (
      <Router>
        <Home />
      </Router>
  );
}

export default App;
