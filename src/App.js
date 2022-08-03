// import './App.css';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import About from './components/About';
import NotFound from './components/NotFound';
import Footer from './components/Footer';

import { BrowserRouter as Router , Route, Switch } from 'react-router-dom';
import Contact from './ContactForm';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
      <div className="content">
        <Switch>
          <Route exact path="/">
            <About/>
          </Route>
          <Route exact path="/skills">
            <Skills/>
          </Route>
          <Route exact path="/contact">
            <Contact/>
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </div>
      <Footer/>
    </div>
    </Router>
  );

}

export default App;
