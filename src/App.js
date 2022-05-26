import React, { useState } from 'react';
import './App.css';
import Login from './components/Login';
import Quiz from './components/Quiz';

function App() {

  // Este use State debe de verificar si hay un token en el localstorage
  //TODO: se necesita un useFetch
  //TODO: Se necesita un router
  //Todo: Se necesita un estado global
        // - Almacene Estilo
        // - Almacene Multijugador?
        // - Rtas de las get questions
        // - Token por aparte
        // - Info del user por aparte
  //TODO: Se necesita un componente de registro
  //Todo: Se necesita un useFetch encargado de las peticiones de las preguntas
  const [start, setStart] = useState(false);
  return (
    <div className="quiz">
      { start ? <Quiz /> : <Login props={setStart} />}
    </div>
  );
}

export default App;
