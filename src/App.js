import './App.css';
import Hero from './components/Hero/Hero';
import Programms from './components/progeamms/programms';
import Reasons from './components/reasons/Reasons';
import Plans from './components/plans/plans';
import Testimonials from './components/testimonials/testimonials';
import Join from './components/join/Join';
import Footer from './components/footer/footer';

function App() {
  return (
    <div className="App">
      <Hero />
      <Programms />
      <Reasons />
      <Plans />
      <Testimonials />
      <Join />
      <Footer />
    </div>
  );
}

export default App;
