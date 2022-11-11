import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import RestaurantDetails from './RestaurantDetails'
import Footer from './Footer';


function App() {
  return (
    <Router className="App">
      <Header/>

      <Routes>        

<Route path='/' element={<Home/>}/>

<Route path='/details/:id' element={<RestaurantDetails/>}/>

    </Routes>
    <Footer/>
    </Router>
  );
}

export default App;
