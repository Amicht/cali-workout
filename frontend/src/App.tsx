import Home from './ui/screens/home/Home';
import { Routes, Route } from "react-router-dom"
import GetStarted from './ui/screens/get-started/GetStarted';
import ChooseProgram from './ui/screens/choose-program/ChooseProgram';
import AppNavbar from './ui/components/navbar/AppNavbar';
import { WorkourProgramCtxt } from './services/context/WorkoutProgramService';
import WorkoutPage from './ui/screens/workout-page/WorkoutPage';
import { LanguageCtst } from './services/context/LanguageService';
import React from 'react';
import LoadingComponent from './ui/components/loading/LoadingComponent';
import About from './ui/screens/about/About';
import Error404Page from './ui/screens/error-404/Error404Page';
import { appRoutes } from './services/appRoutes';



function App() {
  const {language:{about, direction}} = React.useContext(LanguageCtst);
  const {states} = React.useContext(WorkourProgramCtxt);
  
  return (
    <div >
      <AppNavbar />

      <div className='container'>
          <Routes>
          <Route path={appRoutes.homeScreen} element={ <Home/> } />
          <Route path={appRoutes.plansScreen} element={ <GetStarted/> } />
          <Route path={appRoutes.chooseProgramScreen} element={ <ChooseProgram/> } />
          <Route path={appRoutes.workout} element={ <WorkoutPage /> } />
          <Route path={appRoutes.about} element={ <About direction={direction} page={about}/> } />
          <Route path="*" element={<Error404Page /> } />
        </Routes>
        {!!states && states.isLoading? <LoadingComponent />:null}
      </div>
    </div>
  );
}

export default App;
