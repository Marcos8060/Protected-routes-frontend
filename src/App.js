import './App.css';
import { BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Home from './pages/Home';
import Login from './pages/Login';
import Header from './pages/Header';
import PrivateRoutes from './utils/Private';

function App() {
  return ( 
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route exact path='/' element={ <Home />}></Route>
          </Route> 
          <Route exact path='/login' element={ <Login />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
