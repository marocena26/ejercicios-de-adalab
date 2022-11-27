import '../styles/App.scss';


function App() {

  const handleInput = (ev) => {
    ev.preventDefault();
    console.log('La última tecla pulsada ha sido: ', ev.key);
  };

  return (
   <form action="">
    <input type='text' onKeyUp={handleInput} />
   </form>
  );
}

export default App;
