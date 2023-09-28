import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Router from './Router';
import logo from './logo.svg';
import {Amplify} from 'aws-amplify'
import awsmobile from './aws-exports.js'
import Form from './components/Form'
Amplify.configure(awsmobile)

ReactDOM.render(<Router />, document.getElementById('root'));
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Form />
        <p className="text-green-300">
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
