import './App.css';
import ClicksContador from './components/ClicksContador';
import ProductosClass from './components/ProductosClass';
import { useState } from 'react';

function App() {
  //Estado con booleano
  const [cambio, setCambio] = useState(false);
  //Estado con string
  const [productos, setProductos] = useState('');
  //Estado con objeto
  const [state, setState] = useState({
    id: '',
    nombre: '',
    precio: 0,
  });

  const cambiador = () => {
    setCambio(!cambio);
    console.log('Cambio');
  };
  return (
    <>
      <h1>Estos son Hooks</h1>
      <ProductosClass />
      <ClicksContador />
      <button onClick={cambiador}>{cambio ? 'Desactivado' : 'Activado'}</button>
      <input
        type="text"
        placeholder="Ingresar el producto"
        value={productos}
        onChange={(e) => setProductos(e.target.value)}
      />

      <h3>ID: {state.id}</h3>
      <h3>Nombre: {state.nombre}</h3>
      <h3>Precio: {state.precio}</h3>
    </>
  );
}

export default App;