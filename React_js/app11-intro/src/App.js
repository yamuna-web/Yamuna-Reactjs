import logo from './logo.svg';
import './App.css';
import { LifeCycleA } from './LifeCycleHooks/LifeCycleA';
import { LifeCycleB } from './LifeCycleHooks/LifeCycleB';

function App() {
  return (
    <div className="App">
      {/* <LifeCycleA/> */}
      <LifeCycleB/>
      
    </div>
  );
}

export default App;
