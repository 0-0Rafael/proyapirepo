import logo from './logo.svg';
import './App.css';


function realizarOperacion(e){
  e.preventDefault();
  const v1 = parseInt(e.target.valor1.value);
  const v2 = parseInt(e.target.valor2.value);
  const sumar = v1 + v2;
  alert("la suma es: " + sumar );
  
}

function App() {
  return (
    <div>
      <form onSubmit={realizarOperacion}>
        <p>Ingresa el primer valor: 
          <input type='number' name='valor1'/>
        </p>

        <p>Ingresa el segundo valor: 
          <input type='number' name='valor2'/>
        </p>

        <p>
          <input type='submit' name='sumar'/>
        </p>
      </form>
    </div>
  );
    
}

export default App;
