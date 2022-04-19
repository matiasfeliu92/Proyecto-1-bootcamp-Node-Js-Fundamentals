import logo from './logo.svg';
import './App.css';

import CompMostrarCanciones from './componentes/MostrarCanciones';
import MostCanc from './componentes/MostCanc';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header> */}
      {/* <CompMostrarCanciones/> */}
      <MostCanc/>
    </div>
  );
}

export default App;
