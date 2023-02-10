import React from 'react';
import { Link } from '@ifss/demoui';
import { Button, MyProCard } from '@ifss/ui';
import { Button as AntdButton } from 'antd';
import './App.css';
import './demo.less';

function App() {
  console.log(Button, '@ifss/ui');
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="header">
          Web
          <div className="Turborepo">Turborepo Example</div>
        </h1>
        <div>
          <Link className="App-link" href="https://turbo.build/repo">
            Turborepo Docs
          </Link>
          <span> | </span>
          <Link className="App-link" href="https://reactjs.org">
            ReactReact Docs
          </Link>
        </div>
      </header>
      <div>
        Button: <Button>btbtnbtnn</Button>
      </div>
      <div>
        MyProCard: <MyProCard />
      </div>
      <div>
        AntdButton: <AntdButton type="primary">12345678</AntdButton>
      </div>
    </div>
  );
}

export default App;
