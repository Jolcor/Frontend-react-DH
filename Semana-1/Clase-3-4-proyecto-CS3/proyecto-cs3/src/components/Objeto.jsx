const Objeto = () => {
  const productos = [
    {
      id: 1,
      nombre: 'Memoria Ram 16gb',
      precio: 300,
    },
    {
      id: 2,
      nombre: 'teclado',
      precio: 20,
    },
    {
      id: 4,
      nombre: 'Placa de Video ',
      precio: 500,
    },
    {
      id: 3,
      nombre: 'Monitor',
      precio: 200,
    },
  ];
  return (
    <>
      <h3>Map de Objetos</h3>
      <ul>
        {productos.map((elementos) => {
          return (
            <>
              <li key={elementos.id}>
                Productos: {elementos.nombre} - Precio: {elementos.precio}
              </li>
            </>
          );
        })}
      </ul>
    </>
  );
};

export default Objeto;
