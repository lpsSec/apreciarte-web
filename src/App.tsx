import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import { Screens as Routes } from './screensRoutes/Screens';

function App() {
  return (
    <Router>
      <Routes /> 
    </Router>
  );
}

export default App;
