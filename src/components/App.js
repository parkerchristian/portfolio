import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Portfolio from '../containers/Portfolio';
import { Header, Footer } from './banners/Banners';

export default function App() {
  return (
    <Router>
      <Link to="/"><Header /></Link>
      <Switch>
        <Route exact path="/" component={Portfolio} />
      </Switch>
      <Footer />
    </Router>
  );
}