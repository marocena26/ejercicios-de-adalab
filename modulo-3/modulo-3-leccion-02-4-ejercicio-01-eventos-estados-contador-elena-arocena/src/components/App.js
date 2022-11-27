// Importamos useState desde React porque lo vamos a necesitar más abajo
import {useState} from 'react';

// Creamos la función o componente App. Esta vez lo creamos con una función arrow.
const App = () => {
  // Creamos la variable de estado number y la función para modificarla setNumber.
  // El valor inicial que va a tener number es 0.
  let [number, setNumber] = useState(0);

  // Creamos una función manejadora que se ejecutará cuando la usuaria pulse el botón.
  //Esta función añadirá un número.
  const handleButton = (ev) => {
    ev.preventDefault();
    number++;
    setNumber(number)
  };

  //Esta función restará un número.
  const handleButtonLess = (ev) => {
    ev.preventDefault();
    number = number -1;
    setNumber(number)
  };

  //Esta función reseteará el contador.
  const handleButtonReset = (ev) => {
    ev.preventDefault();
    number = '0';
    setNumber(number)
  };
  
  return (
    <div>
      <h1>El contador:</h1>
      <button onClick={handleButton}>Añade</button>
      <button onClick={handleButtonLess}>Reduce</button>
      <button onClick={handleButtonReset}>Borra</button>
      <p>Contador:{number}</p>
    </div>
  );
};

export default App;