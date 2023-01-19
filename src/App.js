import './App.css';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Result from './components/result'
import { MediumProvider } from './context/MediumContext'

function App() {
  return (
      <div>
      <MediumProvider>
      <Router>
      <Navbar/>
        <Routes>
          <Route exact path='/' element={<Dashboard/>} >
          </Route>
          <Route exact path='/:id' element={<Dashboard/>} >
          </Route>
          <Route exact path='/checkout' element={<Result/>} >
          </Route>
        </Routes>
      </Router>
      </MediumProvider>
    </div>
  );
}

export default App;
