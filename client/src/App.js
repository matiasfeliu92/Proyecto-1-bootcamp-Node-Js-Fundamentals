import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CrearCancion from './componentes/CrearCancion';
import EditarCancion from './componentes/EditarCanciones';
import MostrarCanciones from './componentes/MostrarCanciones';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MostrarCanciones/>}/>
          <Route path='/guardar' element={<CrearCancion/>}/>
          <Route path='/actualizar/:id' element={<EditarCancion/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
