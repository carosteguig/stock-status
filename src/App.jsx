import './App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import Home from './pages/Home/Home';





function App() {
  return (
    <>
      <Router>
        <Navigation />
        <Switch>
          <Route to='/' component={Home} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
