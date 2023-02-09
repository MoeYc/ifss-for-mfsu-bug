import React from 'react';

import { Button } from '@ifss/ui';
// import { Desc } from '@ifss/ui';

import { add, say, sub } from '@ifss/tools';
import './App.css';

console.log(add, 'add');
console.log(sub, 'sub');
console.log(say, 'say');
// console.log(Button, 'ButtonButtonButtonButton')

function App() {
  // const Button = require("@ifss/ui");
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="header">
          Web
          <div className="Turborepo">Turborepo Example</div>
        </h1>
        <div>
          {/* <Dialog>DialogDialogDialog</Dialog> */}
          <h1>
            person: <Button />{' '}
          </h1>
          {/* <Desc /> */}
        </div>
      </header>
    </div>
  );
}

export default App;
