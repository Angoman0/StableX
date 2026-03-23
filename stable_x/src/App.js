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
    <br /><br /><br />
    <footer className='lol'>
        <div className='row'>
          
          <div className='col-md-8'>
        
         <h1>Information</h1>
         <p>Stablex is a modern horse rental and equestrian marketplace dedicated to connecting people with exceptional horses for riding, training, and adventure. We believe that every rider, whether beginner or experienced, deserves access to well-trained, healthy, and reliable horses.

        Our platform offers a wide selection of horses suited for leisure rides, events, and long-distance experiences. At Stablex, we prioritize animal welfare, quality service, and customer satisfaction, ensuring every interaction is safe, transparent, and enjoyable.

          We work closely with trusted breeders, trainers, and stable owners to bring you horses that meet high standards of care and performance. Our mission is to make horse riding more accessible, convenient, and exciting across Kenya.

          Stablex is more than a marketplace—it’s a community built around passion, trust, and the love of horses.
</p>
         </div>

         <div className='col-md-4'>
          <h1>Contact us</h1>
          <p>We’d love to hear from you! .
            <br /><br />
             Location: Karen, Nairobi, Kenya <br /><br />
             Phone: +254 700 000 000 <br /><br />
             Email: [kihethu@stablex.co.ke](support@stablex.co.ke)
<br /><br />

At Stablex, your riding experience is our priority. Feel free to connect with us anytime!
</p>
         
         </div>

       

        </div>
        </footer> 

      </div>
    
    </Router>
  );
}

export default App;
