import logo from './logo.svg';
import './App.css';

import CompMostrarCanciones from './componentes/MostrarCanciones';
import MostCanc from './componentes/MostCanc';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CrearCancion from './componentes/CrearCancion';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header> */}
      {/* <CompMostrarCanciones/> */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MostCanc/>}/>
          <Route path='/guardar' element={<CrearCancion/>}/>
        </Routes>
      </BrowserRouter>
      {/* <MostCanc/> */}
    </div>
  );
}

export default App;
