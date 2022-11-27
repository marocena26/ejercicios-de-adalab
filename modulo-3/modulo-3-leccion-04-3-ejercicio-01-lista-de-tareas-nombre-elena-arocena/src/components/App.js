// Fichero src/components/App.js
import {useState} from 'react';
import '../styles/App.scss';

const App = () => {
  // Estados

  const [tasks, setTasks] = useState([
    {task: 'Comprar harina, jamón y pan rallado', completed: true},
    {task: 'Hacer croquetas ricas', completed: true},
    {task: 'Ir a la puerta de un gimnasio', completed: false},
    {
      task: 'Comerme las croquetas mirando a la gente que entra en el gimnasio',
      completed: false, 
    }
  ]);

  const [searchTask, setsearchTask] = useState('');

  // Eventos

  const handleComplete = (ev) => {
    const taskId = ev.currentTarget.id;
    tasks[taskId].completed = !tasks[taskId].completed;
    setTasks([...tasks]);
  }; 

  const handleSearchTask = (ev) => {
    setsearchTask(ev.target.value);
  };

  const renderTasks = () => {

    return tasks
    
      .filter((task) => {
        return task.task.toLowerCase().includes(searchTask.toLowerCase());
      })

     .map((task,index) => {

      let crossed = "";
      if (task.completed === true) {
        crossed = "complete";
      }
      
      return (
        <li key={index} className={crossed} onClick={handleComplete} id={index}>
         {task.task} 
        </li>
      );
    });
  };

  return (
    <div>
      <h1>Mi lista de tareas</h1>
      <ul>{renderTasks()}</ul>
      <form>
        <label htmlFor='searchTask'>Aquí puedes buscar la tarea: </label>
        <input
          type='text'
          id='searchTask'
          value={searchTask}
          onChange={handleSearchTask}
        />
      </form>
    </div>
  );
};

export default App;