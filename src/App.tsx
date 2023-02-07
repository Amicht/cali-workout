import Home from './ui/screens/home/Home';
import { Routes, Route } from "react-router-dom"
import GetStarted from './ui/screens/get-started/GetStarted';
import ChooseProgram from './ui/screens/choose-program/ChooseProgram';
import AppNavbar from './ui/components/navbar/AppNavbar';
import WorkourProgramService, { WorkourProgramCtxt } from './services/context/WorkoutProgramService';
import WorkoutPage from './ui/screens/workout-page/WorkoutPage';
import { LanguageCtst } from './services/context/LanguageService';
import React from 'react';
import LoadingComponent from './ui/components/loading/LoadingComponent';



function App() {
  const {language} = React.useContext(LanguageCtst);
  const {states} = React.useContext(WorkourProgramCtxt);
  
  return (
    <div className={`app-direction-${language.direction}`} >
      <AppNavbar />

      <div className='container'>
          <Routes>
          <Route path={language.homeScreen.route} element={ <Home/> } />
          <Route path={language.plansScreen.route} element={ <GetStarted/> } />
          <Route path={language.chooseProgramScreen.route} element={ <ChooseProgram/> } />
          <Route path={language.workout.route} element={ <WorkoutPage /> } />
          <Route path="about" element={ "" } />
          <Route path="contact" element={ "" } />
        </Routes>
        {!!states && states.isLoading? <LoadingComponent />:null}
      </div>
    </div>
  );
}

export default App;
