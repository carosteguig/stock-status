import './App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import Home from './pages/Home/Home';
import Edit from './pages/Edit/Edit';





function App() {
  return (
    <>
      <Router>
        <Navigation />
        <Switch>

          <Route 
            path='/' exact 
            render={(routerProps) =>
            <Home {...routerProps} />
          } />

          <Route 
            path='/edit' exact 
            render={(routerProps) =>
            <Edit {...routerProps} />
          } />

          <Route 
            path='/edit/:colour'
            render={(routerProps) =>
            <Edit {...routerProps} />
          } />
          
        </Switch>
      </Router>
    </>
  );
}

export default App;
