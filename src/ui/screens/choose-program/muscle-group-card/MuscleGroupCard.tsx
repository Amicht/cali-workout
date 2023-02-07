import React from 'react'
import './muscle-group-card.scss'
import {GiLeg, GiAbdominalArmor, GiChestArmor, GiBiceps } from 'react-icons/gi'
import Badge from 'react-bootstrap/Badge';
import { ProgramMuscleGroups } from '../../../../models/workoutModel';

const icons = {
  "GiLeg": <GiLeg />,
  "GiAbdominalArmor": <GiAbdominalArmor />,
  "GiChestArmor": <GiChestArmor />,
  "GiBiceps": <GiBiceps />
}

interface Props{
  name: keyof ProgramMuscleGroups | string,
  muscles: string[], 
  isChosen: boolean,
  onMuscleClick:(muscle:string, mslGrpName:keyof ProgramMuscleGroups | string)=>void,
}


const MuscleGroupCard = (props:Props) => {
    const {name, muscles } = props;

  return (
    <div className={`muscle-group-card mx-2 my-2 ${props.isChosen?'is-checked': ""}`}>
        <h3>
          <Badge className='checked-bedge' bg="secondary" hidden={!props.isChosen}><span>checked</span></Badge>
          {name} 
        </h3>
        <div className='mb-3 muscle-group-icon'>
          {props.name==="squat"?<div>{icons.GiLeg}</div>:null}
          {props.name==="core"?<div>{icons.GiAbdominalArmor}</div>:null}
          {props.name==="push"?<div>{icons.GiChestArmor}</div>:null}
          {props.name==="pull"?<div>{icons.GiBiceps}</div>:null}
        </div>
        <ul>{muscles.map((msl, idx) => 
            <li 
              className='muscle-type text-start mx-5' 
              key={idx} 
              onClick={() => props.onMuscleClick(msl, name)}>
                {msl}
            </li>)}
          </ul>
    </div>
  )
}

export default MuscleGroupCard