import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Home from './components/Home';
import Services from './components/Services';
import Portfolio from './components/Portfolio';

const App = () => (
  <>
    <header>
      <Navbar />
    </header>
    <section id="home">
      <Home />
    </section>
    <section id="about">
      <About />
    </section>
    <section id="services">
      <Services />
    </section>
    <section id="portfolio">
      <Portfolio />
    </section>
  </>
);

export default App;
