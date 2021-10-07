import './App.css';
import React from 'react'
import Progress from './components/Progress'
import Navbar from './components/Navbar/index'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/home'
import Blog from './pages/blog'
import signUp from './pages/signUp'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="App">
      <Progress />
      <header></header>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/blog' component={Blog} />
          <Route path='/signUp' component={signUp} />
        </Switch>
      </Router>
      <Footer />
    </div>

  )
}
