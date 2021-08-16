import {useState, useEffect} from 'react';
import './App.css';


function App() {
  const [dolar, setDolar] = useState(0);
  const [euro, setEuro] = useState(0);
  const [bitcoin, setBitcoin] = useState(0);  

  const [tipo, setTipo] = useState(1);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (tipo == '1') {
      setDolar(total);
      setEuro((total * 0.85));
      setBitcoin((total * 0.000022));
    }
    if (tipo == '2') {
      setDolar(total * 1.18);
      setEuro((total));
      setBitcoin((total * 0.000025));
    }
    if (tipo == '3') {
      setDolar(total * 47560.64);
      setEuro((total * 40324.81));
      setBitcoin((total));
    }
    
  }, [total, tipo]);


  const handleTotalChange = e => {
    if (!isNaN(e.target.value)) {
      setTotal(e.target.value);
    }
  };


  return (
    <div className="App">
      <h1>Convertidor de divisas</h1>

      <p>Dólares: {dolar}</p>
      <p>Euros: {euro}</p>
      <p>Bitcoins: {bitcoin}</p>

      <hr />

      <h3>{total}</h3>

      <select onChange={event => setTipo(event.target.value)} value={tipo}>
        <option value={1}>Dólares</option>
        <option value={2}>Euros</option>
        <option value={3}>Bitcoins</option>
      </select>
      <input onChange={handleTotalChange} value={total} />
    </div>
  );
}

export default App;
