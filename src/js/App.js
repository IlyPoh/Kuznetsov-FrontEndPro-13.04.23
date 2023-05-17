import React from 'react';

import { LoginForm } from './components/LoginForm';

import '../style/app.scss';

function App() {
  return (
    <>
      <div className="login">
        <LoginForm />
      </div>
    </>
  );
}

export default App;
