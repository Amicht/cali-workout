import React from 'react'
import { WorkoutModel } from '../../../models/workoutModel';
import { WorkourProgramCtxt } from '../../../services/context/WorkoutProgramService';
import PageTitle from '../../components/titles/PageTitle';
import WorkoutSet from './workout-set/WorkoutSet';
import { ExerciseModel } from '../../../models/ExerciseModel';
import { PreWorkout } from './pre-workout/PreWorkout';
import { LanguageCtst } from '../../../services/context/LanguageService';
import { workoutSettings } from '../../../services/context/workoutSettings';
import WorkoutInfo from './workoutInfo/WorkoutInfo';


const WorkoutPage = () => {
    const {language} = React.useContext(LanguageCtst);
    const {funcs} = React.useContext(WorkourProgramCtxt);
    const [program, setProgram] = React.useState<ExerciseModel[]>([]);
    const [isWorkoutStarted, setIsWorkoutStarted] = React.useState(false);
    const [currentExrc,setCurrentExerc] = React.useState(0);
    const [isBreak,setIsBreak] = React.useState(false);
    const [isWorkoutCompleted,setIsWorkoutCompleted] = React.useState(false);
    const [currentSet,setCurrentSet] = React.useState(1);
    


    const setNextPhase = () => {
        if(currentExrc === 3) setCurrentExerc(0);
        else setCurrentExerc(currentExrc + 1);
        setIsBreak(!isBreak);
    }

    const onSetEndHandler = () => {
        if(currentSet === workoutSettings.totalSets){
            setIsWorkoutCompleted(true);
            return;
        }
        else{
            setCurrentSet(currentSet + 1);
            setIsBreak(!isBreak);
            return;
        }
    }

    const onTimoutHandler = () => {

        if(!isWorkoutStarted){
            setIsWorkoutStarted(true);
            return;
        }

        if(isBreak){
            setNextPhase();
            return;
        }
        else if(currentExrc === program.length - 1){
            onSetEndHandler();
            return
        }

        setIsBreak(!isBreak);
        return; 
    }
    
    
    React.useEffect(() => {
        const userProgram:WorkoutModel | null = funcs!.getUserProgram();
        if(!!userProgram){
            setProgram(Object.values(userProgram.mslGrp).map(ex => ex.exercise));
        } 
    },[]);

    
    
  return (
    <div 
        style={{direction:`${language.direction === 'rtl'? 'rtl': 'ltr'}`}}
    className='screen text-primary mt-5'>

        <PageTitle title={language.workout.title}/>
        
        {(program.length > 0)?
        <>

            {isWorkoutStarted?
            <>
                <WorkoutSet 
                    breakTime={workoutSettings.breakTime.btwnExrc}
                    currentExrc={currentExrc}
                    exerciseTime={workoutSettings.exerciseTime}
                    isBreak={isBreak}
                    isCompleted={isWorkoutCompleted}
                    onTimoutHandler={onTimoutHandler}
                    exrs={program}
                />
                <div className='col-md-6 mx-auto mt-5'>
                    <WorkoutInfo 
                        isBreak={isBreak}
                        isWorkoutCompleted={isWorkoutCompleted}
                        currentExercise={currentExrc +1}
                        currentSet={currentSet}
                        difficulty={program[currentExrc].difficulty}
                        language={language}
                    />
                </div>
            </>
            :<PreWorkout 
                title={language.workout.txts.start}
                content={""}
                firstExerciseName={program[0].name}
                startInCounter={workoutSettings.startInCounter} 
                onTimeoutHandler={onTimoutHandler}
            />}



        </> :null}


    </div>
  )
}

export default WorkoutPage