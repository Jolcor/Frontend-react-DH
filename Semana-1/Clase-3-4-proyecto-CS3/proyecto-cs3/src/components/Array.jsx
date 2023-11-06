const Array = () => {
  const frutas = ['Frutilla', 'Manzana', 'Banana', 'Pera', 'Naranja'];
  return (
    <>
      <h3>Map de Array</h3>
      <ul>
        {frutas.map((fruta, index) => {
          return (
            <>
              <li key={index}>{fruta}</li>
            </>
          );
        })}
      </ul>
    </>
  );
};

export default Array;
