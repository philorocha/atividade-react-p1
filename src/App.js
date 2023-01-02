import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './screens/Home';
import Login from './screens/Login';
import Register from './screens/Register';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/Home' element={ <Home /> } />
        <Route path='/Register' element={ <Register /> } />
      </Routes>
    </Router>

  );
}

export default App;
