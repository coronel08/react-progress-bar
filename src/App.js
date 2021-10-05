import './App.css';
import React from 'react'
import Progress from './components/Progress'
import Navbar from './components/Navbar/index'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './pages/about'
import Blog from './pages/blog'
import signUp from './pages/signUp'


export default function App() {
  return (
    <div className="App">
      <Progress />
      <header></header>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/about' component={About} />
          <Route path='/blog' component={Blog} />
          <Route path='/signUp' component={signUp} />
        </Switch>
      </Router>
    </div>

  )
}
