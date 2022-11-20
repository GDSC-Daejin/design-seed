import { useEffect, useState } from 'react';

import { themeHandler, changeTheme } from '@gdsc-dju/gds-theme/themeHandler';

import reactLogo from './assets/react.svg';
import './App.css';

function App() {
  useEffect(() => {
    themeHandler();
  }, []);
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className={'glass-effect'}>Vite + React</h1>
      <div className="card">
        <button onClick={() => changeTheme()}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;