import './App.css';
import { ComponentBody } from './components/ComponentBody/ComponentBody';
import { ComponentFooter } from './components/ComponentFooter/ComponentFooter';
import { ComponentHeader } from './components/ComponentHeader/ComponentHeader';

function App() {
  return (
    <div className="App">
      <ComponentHeader />
      <ComponentBody />
      <ComponentFooter />
    </div>
  );
}

export default App;
