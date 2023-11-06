import '../App.css';
import Titulo from './components/Titulo';
import Footer from './components/Footer';
import Article from './components/Article';
import Array from './components/Array';
import Objeto from './components/Objeto';

function App() {
  return (
    <>
      <Titulo />
      <Article mensaje="Soy un mensaje que pasa por props" />
      <Array />
      <Objeto />
      <Footer />
    </>
  );
}

export default App;
