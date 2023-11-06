const Padre = (props) => {
  return (
    <div className="caja">
      <h2>Estoy recibiendo a mis hijos</h2>
      {props.children}
    </div>
  );
};

export default Padre;
