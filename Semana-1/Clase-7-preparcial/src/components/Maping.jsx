const Maping = () => {
  const animales = [
    {
      id: 334,
      especie: 'Perro',
      vacunas: false,
    },
    {
      id: 156,
      especie: 'Gato',
      vacunas: true,
    },
    {
      id: 985,
      especie: 'Perro',
      vacunas: true,
    },
  ];
  return (
    <div>
      <h2>Mapa de Animales</h2>

      <ul>
        {animales.map((animal) => {
          return (
            <li key={animal.id}>
              Especie: {animal.especie} - Vacunas: {animal.vacunas ? 'Si' : 'No'}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Maping;
