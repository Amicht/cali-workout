import React from 'react'
import { ExerciseModel } from '../../../../models/ExerciseModel'
import ParagraphTitle from '../../choose-program/exercise-card/ParagraphTitle'
import Timer from '../timer/Timer'
import { LanguageCtst } from '../../../../services/context/LanguageService'

interface Props{
    exrs: ExerciseModel[],
    onTimoutHandler: () => void,
    isBreak: boolean,
    breakTime: number,
    exerciseTime: number,
    isCompleted: boolean,
    currentExrc: number
}


const WorkoutSet: React.FC<Props> = ({exrs, isBreak, breakTime, 
    exerciseTime, isCompleted, currentExrc,onTimoutHandler }) => {

        const {language} = React.useContext(LanguageCtst);
    
  return (
    <div>
        {isBreak?
        <Timer 
            key={0}
            startTime={breakTime} 
            isBreak={isBreak} 
            onTimoutHandler={onTimoutHandler}/>:
        <Timer 
            key={1}
            startTime={exerciseTime} 
            isBreak={isBreak} 
            onTimoutHandler={onTimoutHandler}/>
        }

        {!isCompleted?
        <ParagraphTitle 
            titleName={isBreak? 
                language.workout.txts.p_titles.break:
                language.workout.txts.p_titles.work}
            content={isBreak && currentExrc < exrs.length -1?
                exrs[currentExrc + 1].name:
                exrs[currentExrc].name}
         />:
         <ParagraphTitle 
            titleName={language.workout.txts.p_titles.completed.title}
            content={language.workout.txts.p_titles.completed.subtitle}
         />}
        
    </div>
  )
}

export default WorkoutSet