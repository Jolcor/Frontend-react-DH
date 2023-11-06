import { useState } from 'react';
//useSteate
//useContext
//useEffect
//useRef
const Formulario = () => {
  const [nombre, setNombre] = useState('');

  return (
    <div>
      <from>
        <label>Nombre: </label>
        <input
          type="text"
          name="nombre"
          placeholder="Ingresa tu nombre"
          value={nombre}
          //funcion anomima por q solo tiene el parametro ya que la fincion no tiene un nombre
          onChange={(e) => setNombre(e.target.value)}
        />
        <br />
        <label>Nombre: </label>
        <input type="text" name="nombre" placeholder="Ingresa tu nombre" />
        <br />
        <label>Nombre: </label>
        <input type="text" name="nombre" placeholder="Ingresa tu nombre" />
        <br />
        <label>Nombre: </label>
        <input type="text" name="nombre" placeholder="Ingresa tu nombre" />
        <br />
        <br />
      </from>
    </div>
  );
};

export default Formulario;
