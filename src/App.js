import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/Home';
import About from './components/About'

function App() {
  return (
      <div>
        <Home />
        <About />
      </div>
  );
}

export default App;
