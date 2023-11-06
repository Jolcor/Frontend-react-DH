import { useState } from 'react';

const ClickContador = () => {
  const [clicks, setClicks] = useState(0);
  return (
    <button
      onClick={() => {
        setClicks(clicks + 1);
      }}
    >
      Clicks = {clicks}
    </button>
  );
};

export default ClickContador;
