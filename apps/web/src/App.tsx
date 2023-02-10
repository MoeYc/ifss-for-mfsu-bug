import React from 'react';
import { Link } from '@ifss/demoui';
import { Button, MyProCard } from '@ifss/ui';
import './App.css';

function App() {
  console.log(Button, '@ifss/ui');
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="header">
          Web123
          <div className="Turborepo">Turborepo Example</div>
        </h1>
        <div>
          <Link className="App-link" href="https://turbo.build/repo">
            Turborepo Docs
          </Link>
          <span> | </span>
          <Link className="App-link" href="https://reactjs.org">
            React Docs
          </Link>
        </div>
      </header>
      <div>
        Button: <Button>btbtnbtnn</Button>
      </div>
      <div>
        MyProCard: <MyProCard />
      </div>
    </div>
  );
}

export default App;
