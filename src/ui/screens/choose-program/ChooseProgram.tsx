import React from 'react'
import './choose-program.scss';
import locales from '../../../assets/locales/en.json';
import MuscleGroupCard from './muscle-group-card/MuscleGroupCard';
import CostumBtn from '../../components/costum-button/CostumBtn';
import PageSubtitle from '../../components/titles/PageSubtitle';
import PageTitle from '../../components/titles/PageTitle';
import MuscleGroupModal from './muscle-group-modal/MuscleGroupModal';
import { WorkourProgramCtxt } from '../../../services/context/WorkoutProgramService';
import { ExerciseModel } from '../../../models/ExerciseModel';
import { getProgramFromStorage } from '../../../services/local-storage/workoutStorage';
import { useNavigate } from 'react-router-dom';




const ChooseProgram = () => {
  const workoutProgramCtxt = React.useContext(WorkourProgramCtxt);
  const navigate = useNavigate();
  const [muscleChoice, setMuscleChoice] = React.useState<string>("");
  const [currentMuscleGroupName, setCurrentMuscleGroupName] = React.useState<string | null>(null);
  const [isProgramOK, setIsProgramOK] = React.useState(false);
  let {states:{userProgram}} = workoutProgramCtxt;
  let {funcs:{
    checkIsProgramOK, 
    onProgramInit, 
    getMuscleExercises }} = workoutProgramCtxt;
  
  const [show, setShow] = React.useState(false);
  
  const handleClose = () => {
    setIsProgramOK(checkIsProgramOK());
    setShow(false);
  }
  
  const onMuscleClick = (muscle:string, muscleGrpName:string) => {

    getMuscleExercises({muscle})
    .then(() => {
      setMuscleChoice(muscle);
      setCurrentMuscleGroupName(muscleGrpName);
    })
    .then(() => {
      setShow(true);
    })
  }

  const isMslGrpChosen = (mscGrp:string) => {
    
    if(!!userProgram) return Object.entries(userProgram).filter(msclGrp => (msclGrp[0] === mscGrp) && (msclGrp[1]  !== null)).length > 0;
    else return false
  } 
  const onNextBtnClick = () => {
    if(isProgramOK){ navigate(locales.workout.route) }
  }
  

  React.useEffect(() => {
    window.scrollTo(0, 0);
    onProgramInit();
    setIsProgramOK(checkIsProgramOK());
  },[]);


  return (
    <div className='screen py-3 mt-4'> 
      <PageTitle title={locales.chooseProgramScreen.title} />
      <PageSubtitle subtitle={locales.chooseProgramScreen.subtitle} />
      <div className='row '>
          {locales.chooseProgramScreen.muscleGroups.map((mscGrp, idx) =>
            <div className='col-md mt-4' key={idx}>
              <MuscleGroupCard 
                key={idx} 
                isChosen={isMslGrpChosen(mscGrp.name)} 
                {...mscGrp} 
                onMuscleClick={onMuscleClick}/>
            </div>)}
          <MuscleGroupModal handleClose={handleClose} show={show} muscleName={muscleChoice} muscleGroupName={currentMuscleGroupName || "pull"}/>
      </div>
      <div onClick={onNextBtnClick} className='col-md-4 mx-auto mt-3'>
        <CostumBtn txt='Next' theme='light' disabled={!isProgramOK}/>
      </div>
    </div>
  )
}

export default ChooseProgram