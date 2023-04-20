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
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
          This is a sentence added for the third commit.
        </a>
      </header>
    </div>
  );
}

export default App;
