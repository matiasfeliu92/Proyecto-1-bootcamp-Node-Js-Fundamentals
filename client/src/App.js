import logo from './logo.svg';
import './App.css';

import CompMostrarCanciones from './componentes/MostrarCanciones';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <CompMostrarCanciones/>
    </div>
  );
}

export default App;
