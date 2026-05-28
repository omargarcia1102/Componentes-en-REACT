import logo from './logo.svg';
import './App.css';
import CardUsuario from './UsuarioComponentes/UsuarioCard';
import TarjetaProducto from './UsuarioComponentes/Producto1';
import {FormularioNewsletter} from './UsuarioComponentes/Producto2'
import ListaBotones from './UsuarioComponentes/Producto3';
import TarjetaTailwind from './UsuarioComponentes/Producto4';
import SelectorGenero  from './UsuarioComponentes/Producto5';

function App() {
  return (
    <div>
    <CardUsuario/>
    <TarjetaProducto/>
    <FormularioNewsletter/>
    <div>
    <p><ListaBotones/></p>
    </div>
    <TarjetaTailwind/>

    <p> <SelectorGenero/> </p>
    </div>
    
  );
}

export default App;
