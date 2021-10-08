import './App.css';
import React from 'react'
import Progress from './components/Progress'
import Navbar from './components/Navbar/index'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/home'
import Blog from './pages/blog'
import signUp from './pages/signUp'
import Footer from './components/Footer'
import Calculator from './pages/Calculator'

export default function App() {
  return (
    <div className="App">
      <Progress />
      <header></header>
      <Router>
        <Navbar />
        <Switch>
          {/* Wrong way to pass prop into react router but easy to read 
          https://learnwithparam.com/blog/how-to-pass-props-in-react-router/
          */}
          <Route exact path='/' component={() => <Home name='Prop' /> } />
          <Route path='/blog' component={Blog} />
          <Route path='/signUp' component={signUp} />
          <Route path='/calculator' component={Calculator} />
        </Switch>
      </Router>
      <Footer />
    </div>

  )
}
