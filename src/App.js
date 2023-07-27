import './App.css';
import { Body } from './components/Body/Body';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';

function App() {
  return (
    <div className='canva-des-app'>
      <div className="App gradient">
        <Header />
        <Body />
        <Footer />
      </div>
    </div>
  );
}

export default App;
