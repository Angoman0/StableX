import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Horses from './components/Horses';
import AboutUs from './components/AboutUs';
import Mpesa from './components/Mpesa';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import AddHorses from './components/AddHorses';
function App() {
  return (

    <Router>

    <div className="App">
      <header className="App-header">
        <h1>StableX-The Future of Horse Rentals</h1>
      </header>
      <br /><br />

      <nav>

      <Link to="/signup" className='btn bg-dark text-white m-3'>Sign Up</Link>
      <Link to="/signin" className='btn bg-dark text-white m-3'>Sign In</Link> 
      <Link to="/" className='btn bg-dark text-white m-3'>Horses</Link>
      <Link to="/aboutus" className='btn bg-dark text-white m-3'>About Us</Link>
      <Link to='/addhorses' className='btn bg-dark text-white m-3'>Add Horses</Link>


      </nav>
    

    <Routes>

    <Route path='/signup' element={<SignUp/>}/>
    <Route path='/signin' element={<SignIn/>}/>
    <Route path='/' element={<Horses/>}/>
    <Route path='/aboutus' element={<AboutUs/>}/>
    <Route path='/mpesa' element={<Mpesa/>}/>
    <Route path='/addhorses' element={<AddHorses/>}/>




    </Routes>


      </div>
    
    </Router>
  );
}

export default App;
