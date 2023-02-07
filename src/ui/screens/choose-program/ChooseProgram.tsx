import React from 'react'
import './choose-program.scss';
import MuscleGroupCard from './muscle-group-card/MuscleGroupCard';
import CostumBtn from '../../components/costum-button/CostumBtn';
import PageSubtitle from '../../components/titles/PageSubtitle';
import PageTitle from '../../components/titles/PageTitle';
import MuscleGroupModal from './muscle-group-modal/MuscleGroupModal';
import { WorkourProgramCtxt } from '../../../services/context/WorkoutProgramService';
import { useNavigate } from 'react-router-dom';
import { LanguageCtst } from '../../../services/context/LanguageService';
import { ProgramMuscleGroups } from '../../../models/workoutModel';




const ChooseProgram = () => {
  const {language} = React.useContext(LanguageCtst);
  const workoutProgramCtxt = React.useContext(WorkourProgramCtxt);
  const navigate = useNavigate();
  const [muscleChoice, setMuscleChoice] = React.useState<string>("");
  const [currentMuscleGroupName, setCurrentMuscleGroupName] = React.useState<keyof ProgramMuscleGroups | string>("pull");
  const [isProgramOK, setIsProgramOK] = React.useState(false);
  let {funcs, states} = workoutProgramCtxt;
  
  const [show, setShow] = React.useState(false);
  
  const handleClose = () => {
    setIsProgramOK(funcs!.checkIsProgramOK());
    setShow(false);
  }
  
  const onMuscleClick = (muscle:string, 
    muscleGrpName:string) => {
    funcs!.loadingHandler(true);    
    funcs!.getMuscleExercises({muscle})

    .then(() => {
      setMuscleChoice(muscle);
      setCurrentMuscleGroupName(muscleGrpName);
    })
    .then(() => {
      funcs!.loadingHandler(false);
      setShow(true);
    })
  }

  const isMslGrpChosen = (mscGrp:string) => {
    
    if(!!states!.userProgram) return Object.entries(states!.userProgram)
      .filter(msclGrp => (msclGrp[0] === mscGrp) && (msclGrp[1]  !== null)).length > 0;
    else return false
  } 
  const onNextBtnClick = () => {
    if(isProgramOK){ navigate(language.workout.route) }
  }
  

  React.useEffect(() => {
    window.scrollTo(0, 0);
    funcs!.onProgramInit();
    setIsProgramOK(funcs!.checkIsProgramOK());
  },[]);


  return (
    <div className='screen py-3 mt-4'> 
      <PageTitle title={language.chooseProgramScreen.title} />
      <PageSubtitle subtitle={language.chooseProgramScreen.subtitle} />
      <div className='row mb-5'>
          {language.chooseProgramScreen.muscleGroups.map((mscGrp, idx) =>
            <div className='col-md mt-4' key={idx}>
              <MuscleGroupCard 
                key={idx} 
                isChosen={isMslGrpChosen(mscGrp.name)} 
                muscles={mscGrp.muscles}
                name={mscGrp.name}
                onMuscleClick={onMuscleClick}/>
            </div>)}
          <MuscleGroupModal 
            handleClose={handleClose} 
            show={show} 
            muscleName={muscleChoice} 
            muscleGroupName={currentMuscleGroupName || "pull"}/>
      </div>
      <div className='bottom-next-btn-bg py-3 mt-3'>
        <div 
          onClick={onNextBtnClick} 
          className={`col-md-4 mx-auto bg-transparent px-2`}>

          <CostumBtn 
            txt={language.chooseProgramScreen.nextScreenBtn} 
            theme='light' disabled={!isProgramOK}/>

        </div>
      </div>
    </div>
  )
}

export default ChooseProgram