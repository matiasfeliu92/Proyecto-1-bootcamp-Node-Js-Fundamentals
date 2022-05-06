import logo from './logo.svg';
import './App.css';
import MostCanc from './componentes/MostCanc';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CrearCancion from './componentes/CrearCancion';
import EditarCancion from './componentes/EditarCanciones';
import MostrarCanciones from './componentes/MostrarCanciones';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header> */}
      {/* <CompMostrarCanciones/> */}
      <BrowserRouter>
        <Routes>
          {/* <Route path='/' element={<MostCanc/>}/> */}
          <Route path='/' element={<MostrarCanciones/>}/>
          <Route path='/guardar' element={<CrearCancion/>}/>
          <Route path='/actualizar/:id' element={<EditarCancion/>}/>
        </Routes>
      </BrowserRouter>
      {/* <MostCanc/> */}
    </div>
  );
}

export default App;
