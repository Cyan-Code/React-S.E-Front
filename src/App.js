import React, { useState } from 'react'
import './App.css'
import Login from './components/Login'
import Quiz from './components/Quiz'

function App() {

  const [start, setStart] = useState(false);

  return (
    <div className="quiz">
      { start ? <Quiz /> : <Login props={setStart} />}
    </div>
  );
}

export default App;
