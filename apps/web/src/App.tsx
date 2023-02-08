import React from 'react';

import { Button } from '@ifss/ui';
import { Desc } from '@ifss/ui';

// import "@ifss/person/dist/esm/index.less";
import { add, say } from '@ifss/tools';
import './App.css';

console.log(add(1, 2), 'add');
console.log(say(), 'say');
function App() {
  // const Button = require("@ifss/ui");
  // console.log(Button, 'ButtonButtonButtonButton')
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="header">
          Web
          <div className="Turborepo">Turborepo Example</div>
        </h1>
        <div>
          <h1>
            person: <Button />{' '}
          </h1>
          <Desc />
        </div>
      </header>
    </div>
  );
}

export default App;
