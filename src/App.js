import logo from './logo.svg';
import './App.css';

const App = () => {

  const persona = { nombre: "lelu", altura: "1,70"}
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Dale Boooo dale boooo pd: {persona.nombre} es hincha de bokita
          y mide {persona.altura}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <ButtoComponent />
      </header>
    </div>
  );
}
const ButtoComponent = () => {
  return <button>Dale que aprendemos react veni paaa </button>
}
export default App;
