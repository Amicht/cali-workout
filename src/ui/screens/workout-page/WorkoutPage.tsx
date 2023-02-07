import React from 'react'
import { WorkoutCacheModel } from '../../../models/workoutCacheModel';
import { WorkourProgramCtxt } from '../../../services/context/WorkoutProgramService';
import PageTitle from '../../components/titles/PageTitle';
import WorkoutSet from './workout-set/WorkoutSet';
import { ExerciseModel } from '../../../models/ExerciseModel';
import { PreWorkout } from './pre-workout/PreWorkout';
import { LanguageCtst } from '../../../services/context/LanguageService';


const WorkoutPage = () => {
    const {language} = React.useContext(LanguageCtst);
    const {funcs} = React.useContext(WorkourProgramCtxt);
    const [program, setProgram] = React.useState<ExerciseModel[]>([]);
    const [isWorkoutStarted, setIsWorkoutStarted] = React.useState(false);
    const [currentExrc,setCurrentExerc] = React.useState(0);
    const [isBreak,setIsBreak] = React.useState(false);
    const [isWorkoutCompleted,setIsWorkoutCompleted] = React.useState(false);
    const [currentSet,setCurrentSet] = React.useState(1);
    
    const settings = {
        breakTime: {
            exrc: 3,
            sets: 6
        },
        exerciseTime: 6,
        startInCounter: 5,
        totalSets: 3
    }


    const setNextPhase = () => {
        setIsBreak(!isBreak);
        setCurrentExerc(currentExrc + 1);
    }

    const onSetEndHandler = () => {
        if(currentSet === settings.totalSets){
            setIsWorkoutCompleted(true);
            return;
        }
        else{
            setCurrentSet(currentSet + 1);
            setCurrentExerc(0);
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
        else if(currentExrc === program.length -1){
            onSetEndHandler();
            return
        }

        setIsBreak(!isBreak);
        return; 
    }
    
    
    React.useEffect(() => {
        const userProgram:WorkoutCacheModel | null = funcs!.getUserProgram();
        if(!!userProgram){
            setProgram(Object.values(userProgram.mslGrp).map(ex => ex.exercise));
        } 
    },[]);

    
    
  return (
    <div className='screen text-primary mt-5'>

        <PageTitle title={language.workout.title}/>
        
        {(program.length > 0)?
        <>

            {isWorkoutStarted?
            <WorkoutSet 
                breakTime={settings.breakTime.exrc}
                currentExrc={currentExrc}
                exerciseTime={settings.exerciseTime}
                isBreak={isBreak}
                isCompleted={isWorkoutCompleted}
                onTimoutHandler={onTimoutHandler}
                exrs={program}
            />
            :<PreWorkout 
                title={language.workout.txts.start}
                content={""}
                firstExerciseName={program[0].name}
                startInCounter={settings.startInCounter} 
                onTimeoutHandler={onTimoutHandler}
            />}

        </> :null}
    </div>
  )
}

export default WorkoutPage