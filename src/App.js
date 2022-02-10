import logo from './logo.svg';
import Nav from './components/Nav';
import Main from './components/Main';
import Works from './components/Works';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Main/>
      <Works/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
