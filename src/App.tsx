import Home from './ui/screens/home/Home';
import { Routes, Route } from "react-router-dom"
import GetStarted from './ui/screens/get-started/GetStarted';
import ChooseProgram from './ui/screens/choose-program/ChooseProgram';
import AppNavbar from './ui/components/navbar/AppNavbar';

function App() {
  return (
    <div className="App">
      <AppNavbar />

      <div className='container'>
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/get-started" element={ <GetStarted/> } />
        <Route path="/choose-program" element={ <ChooseProgram/> } />
        <Route path="about" element={ "" } />
        <Route path="contact" element={ "" } />
      </Routes>
      </div>
    </div>
  );
}

export default App;
