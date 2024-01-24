import { useState, useEffect } from 'react';

function App() {

  const [ input, setInput ] = useState('');
  const [ tarefas, setTarefas ] = useState([
    'Pagar a conta de luz',
    'Estudar React Js'
  ]);

  useEffect(() => {
    const tarefasStorage = localStorage.getItem('@tarefa');
    
    if(tarefasStorage) {
      setTarefas(JSON.parse(tarefasStorage))
    }
  }, []);
 
  useEffect(() => {
    localStorage.setItem('@tarefa', JSON.stringify(tarefas));
  }, [tarefas]);

  function registrar(event) {
    event.preventDefault();
    
    setTarefas([...tarefas, input]);
    setInput('');

  }


  return(
    <div>
      <form onSubmit={ registrar}>
        <h1>Cadastrando Usuário</h1>

        <label>Nome da tarefa:</label><br />
        <input 
          value={input}
          onChange={ (event) => { setInput(event.target.value) } }
          placeholder='Digite uma tarefa' 
        /><br /><br />

        <button type="submit">Registrar</button>

      </form>

      <br /><br />

      <ul>
        { tarefas.map( tarefa => (
          <li key= { tarefa }>{ tarefa }</li>
        )) }
      </ul>


    </div>
  );
}

export default App;
