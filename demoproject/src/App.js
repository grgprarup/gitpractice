import logo from './logo.svg';
import './App.css';
import Paragraph from './Components/Paragraph';
import Button from './Components/Button';

function App() {
  return (
    <div className="App">

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <Paragraph/>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

export default App;
