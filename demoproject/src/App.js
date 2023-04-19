import logo from './logo.svg';
import './App.css';
import Paragraph from './Components/Paragraph';
import Button from './Components/Button';

function App() {
  return (
    <div className="App">

      <header className="App-header">
        
        <p>
          <Paragraph/>
          Edit <code>src/App.js</code> and save to reload.
        </p>
          Edit <code>src/App.js</code> and save something.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn something
        </a>
      </header>
    </div>
  );
}

export default App;