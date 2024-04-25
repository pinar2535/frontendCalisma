import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import HomePage from './pages/HomePage';

function App() {
  return (
    <BrowserRouter>
      <HomePage></HomePage>
    </BrowserRouter>
  );
}

export default App;
