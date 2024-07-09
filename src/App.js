import './App.css';
import { Hero } from './component/Hero';
import { HeroProvider } from './context/Hero';

function App() {
  return (
    <div className="App">
      <HeroProvider>
      <Hero/>
      </HeroProvider>
    </div>
  );
}

export default App;
