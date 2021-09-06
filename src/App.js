// import logo from './logo.svg';
import './App.css';
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Button,Spin } from "antd";
import Footer from './compoments/Footer.js'
import Header from './compoments/Header'
const About = React.lazy(() => import('./views/about.js'));
const History = React.lazy(() => import('./views/history.js'));
const Home = React.lazy(() => import('./views/home.js'));
const Mine = React.lazy(() => import('./views/mine.js'));

function App() {
  return (
    <div className="App">
      <Suspense fallback={ <Spin 
      delay={1000}
      size="small" />}>
        <Router>
            <Header>
          
          </Header>
          <main>
        <Switch>
        <Route exact  path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/History" component={History} /> 
        <Route path="/Mine" component={Mine} /> 
        </Switch>
      
        </main>
         <Footer></Footer>
        </Router>     
      </Suspense>
    </div>
  );
}
let add=()=>{
  console.log('add123');
}
export default App;
