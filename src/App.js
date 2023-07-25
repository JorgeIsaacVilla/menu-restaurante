import './App.css';
import { ComponentBody } from './components/ComponentBody/ComponentBody';
import { ComponentFooter } from './components/ComponentFooter/ComponentFooter';
import { ComponentHeader } from './components/ComponentHeader/ComponentHeader';

function App() {
  return (
    <div className='canva-des-app'>
      <div className="App gradient">
        <ComponentHeader />
        <ComponentBody />
        <ComponentFooter />
      </div>
    </div>
  );
}

export default App;
