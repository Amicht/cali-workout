import React from 'react'
import { ExerciseModel } from '../../../../models/ExerciseModel'

interface Props{
    ex: ExerciseModel;
    time: number,

}

export const ExerciseComponent = (props:Props) => {


  return (
    <div>
        {props.ex.name}
    </div>
  )
}
