import '../styles/App.scss';
import logo from '../images/adalab-logo-155x61.png';

function App() {
  return (
    <><header className="header">
      <a href="https://adalab.es/">
        <img src={logo} title="Adalab" alt="Logo de Adalab" />
      </a>
      <nav className="menu">
        <ul>
          <li><a className="link" href="#">Blog</a></li>
          <li><a className="link" href="#">Contacto</a></li>
        </ul>
      </nav>
    </header><main className="main">
        <h1 className="title">Creando diversidad digital</h1>
      </main></>
  );
}

export default App;
