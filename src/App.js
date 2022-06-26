import './App.css';
import logo from "./imagenes/app-logo.jpg";
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';


function App() {
  const manejarClic = () =>{
    console.log("Clic");
  }
  
  const reiniciarContador = () =>{
    console.log("Reiniciar");
  }

  return (
    <div className="App">
      <div className="logo-contenedor">
         <img className="logo"
         src={logo}
         alt="Logo"/>
      </div>
      <div className="contenedor-principal">
         <Contador numClics={5} />
         <Boton
           texto="Clic"
           esBotonDeClic={true}
           manejarClic={manejarClic} 
         /> 
         <Boton
          texto="Reiniciar"
          esBotonDeClic={false} 
          manejarClic={reiniciarContador} 
         /> 
      </div>
      
    </div>
  );
}

export default App;
