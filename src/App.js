import './App.css';
import { BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Home from './pages/Home';
import Login from './pages/Login';
import Header from './pages/Header';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path='/' element={ <Home />}></Route>
          <Route exact path='/login' element={ <Login />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
