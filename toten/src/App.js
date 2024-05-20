
import './App.css';

import Nav from './components/Nav';
import Cidade from './pages/Cidade';
import Home from './pages/Home';
import{BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import QrCode from './pages/QrCode';

function App() {
  return (
    <div className="App">
      <div className="container">

      <Nav numero='1/3'/>
      
      <Router>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route path='/passo2' element={<Cidade/>}/>
          <Route path='/QrCode' element={<QrCode/>}/>
        </Routes>
      </Router>


      </div>

    </div>
  );
}

export default App;
