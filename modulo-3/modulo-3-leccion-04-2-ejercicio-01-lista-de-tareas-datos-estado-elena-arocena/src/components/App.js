// Fichero src/components/App.js
import {useState} from 'react';
import '../styles/App.scss';

const App = () => {
  const [tasks, setTasks] = useState([
    {task: 'Comprar harina, jamón y pan rallado', completed: true},
    {task: 'Hacer croquetas ricas', completed: true},
    {task: 'Ir a la puerta de un gimnasio', completed: false},
    {
      task: 'Comerme las croquetas mirando a la gente que entra en el gimnasio',
      completed: false, 
    }
  ]);

  const handleComplete = (ev) => {
    const taskId = ev.currentTarget.id;
    tasks[taskId].completed = !tasks[taskId].completed;
    setTasks([...tasks]);
  }; 

  const renderTasks = () => {
    return tasks.map((task,index) => {
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
    </div>
  );
};

export default App;