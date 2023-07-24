import './App.css';
import { ComponentBody } from './components/ComponentBody/ComponentBody';
import { ComponentFooter } from './components/ComponentFooter/ComponentFooter';
import { ComponentHeader } from './components/ComponentHeader/ComponentHeader';

function App() {
  return (
    <div className='canva-des-app gradient'>
      <div className='glass-app'>
        <div className="App gradient">
          <ComponentHeader />
          <ComponentBody />
          <ComponentFooter />
        </div>
      </div>
    </div>
  );
}

export default App;
