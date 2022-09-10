import logo from './logo.svg';
import './App.css';
import ParentCompt from './components/ParentCompt';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      <ParentCompt/> 
      <Counter/>
    </div>
  );
}

export default App;
