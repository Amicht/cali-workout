import React from 'react'
import { ExerciseModel } from '../../../../models/ExerciseModel'
import { WorkoutProgramI } from '../../../../models/WorkoutProgramI'
import Timer from '../timer/Timer'


interface Props{
    exrs: ExerciseModel[]
}


const WorkoutSet = (props:Props) => {
    
    const [currentSet,setCurrentSet] = React.useState(0);
    const [currentExrc,setCurrentExerc] = React.useState(0);
    const [isBreak,setIsBreak] = React.useState(false);
    const [isCompleted,setIsCompleted] = React.useState(false);

    const breakTime = 12;
    const exerciseTime = 15;

    const onTimoutHandler = () => {

        if(isBreak){
            setNextPhase();
            return;
        }
        else if(currentExrc === props.exrs.length -1){
            setIsCompleted(true);
            console.log("workout ended");
            return;
        }
        else { 
            setIsBreak(!isBreak);
            return; 
        }
    }
    
    const setNextPhase = () => {
        setIsBreak(!isBreak);
        setCurrentExerc(currentExrc + 1);
    }
    

  return (
    <div>
        {isBreak?<h3><Timer 
            key={0}
            startTime={breakTime} 
            isBreak={isBreak} 
            onTimoutHandler={onTimoutHandler}/></h3>:
        <h3><Timer 
            key={1}
            startTime={exerciseTime} 
            isBreak={isBreak} 
            onTimoutHandler={onTimoutHandler}/></h3>}
        {isBreak?<h4>Take A Break, next:</h4>:null}
        <h4>{isBreak && currentExrc < props.exrs.length -1?
                props.exrs[currentExrc + 1].name:
                props.exrs[currentExrc].name}</h4>
        <h4>
            Description:
        </h4>
    </div>
  )
}

export default WorkoutSet