import './App.css';
import ComponenteHijo from './components/ComponenteHijo';
import Formulario from './components/formulario';
import Padre from './components/Padre';
import Hijo from './components/Hijo';
import Hermano from './components/Hermano';
import Maping from './components/Maping';

function App() {
  return (
    <>
      <h1>Rapaso parcial</h1>
      <Formulario />
      <ComponenteHijo dato="Soy un string" />
      <Padre>
        <Hijo />
      </Padre>{' '}
      <Padre>
        <Hermano />
      </Padre>{' '}
      <Maping />
    </>
  );
}

export default App;
