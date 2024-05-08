
import './App.css';
import Form from './components/Form';
import H1 from './components/H1';
import Nav from './components/Nav';
import Cidade from './pages/Cidade';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <div className="container">

      <Nav numero='1/3'/>
      
      {/* <Home/> */}
      <Cidade/>

      </div>

    </div>
  );
}

export default App;
