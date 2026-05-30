import Nav from './components/Nav';
import Hero from './components/Hero';
import Ticker from './components/Ticker';
import Programme from './components/Programme';
import Artists from './components/Artists';
import Gallery from './components/Gallery';
import About from './components/About';
import Reservation from './components/Reservation';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="noise-overlay min-h-screen bg-[#050508]">
      <Nav />
      <Hero />
      <Ticker />
      <Programme />
      <Artists />
      <Gallery />
      <About />
      <Reservation />
      <Contact />
      <Footer />
    </div>
  );
}
