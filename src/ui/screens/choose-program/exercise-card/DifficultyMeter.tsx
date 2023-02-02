import React from 'react'
import {ProgressBar} from 'react-bootstrap/esm/';
import { GoTriangleUp } from "react-icons/go";

const DifficultyMeter = (props:{difficulty:string, title:string}) => {

    const alignTxtByDifficultyLevel = (difficulty:string) => {
        switch (difficulty){
            case "beginner": 
                return "text-start";
            case "intermediate": 
                return "text-center"
            case "expert": 
                return "text-end"
        }
    }


  return (
    <div >
        <h3 className='fw-bold fs-5 text-secondary mt-3'>{props.title}:</h3>
        <div className='col-md-4 mx-auto'>
            <ProgressBar>
                <ProgressBar striped variant="info" now={33} key={1}/>
                <ProgressBar striped variant="warning" now={33} key={2}/>
                <ProgressBar striped variant="danger" now={34} key={3}/>
            </ProgressBar>
            <div className={alignTxtByDifficultyLevel(props.difficulty)+" px-3"}>
                <GoTriangleUp className='text-secondary'/>
                <div className='text-primary'>{props.difficulty}</div>
            </div>
        </div>
    </div>
  )
}

export default DifficultyMeter