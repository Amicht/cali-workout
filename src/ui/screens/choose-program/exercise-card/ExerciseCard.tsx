import React from 'react'
import { ExerciseModel } from '../../../../models/ExerciseModel'
import ParagraphTitle from './ParagraphTitle';
import DifficultyMeter from './DifficultyMeter';
import { LanguageCtst } from '../../../../services/context/LanguageService';

const ExerciseCard = (props:{exercise:ExerciseModel}) => {

    const {language} = React.useContext(LanguageCtst);

    const {chooseProgramScreen:{exerciseCard:{p_titles}}} = language;

    
  return (
    <div className='exercise-card'>
        <h2 className='fs-1'>{props.exercise.name}</h2>
        <div>
            <ParagraphTitle titleName={p_titles.type} content={props.exercise.type} />
            <ParagraphTitle titleName={p_titles.equipment} content={props.exercise.equipment} />
            <DifficultyMeter difficulty={props.exercise.difficulty} title={p_titles.difficulty}/>
            <ParagraphTitle titleName={p_titles.instructions} content={props.exercise.instructions} />
        </div>
    </div>
  )
}

export default ExerciseCard