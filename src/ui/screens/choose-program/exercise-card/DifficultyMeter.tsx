import React from 'react'
import {ProgressBar} from 'react-bootstrap/esm/';
import { GoTriangleUp } from "react-icons/go";

interface Props{
    difficulty:string;
    difficultyTitle?:string;
    title?:string;
    size: string;
}

function alignTxtByDifficultyLevel(difficulty:string){
    switch (difficulty){
        case "beginner": 
            return "text-start";
        case "intermediate": 
            return "text-center"
        case "expert": 
            return "text-end"
    }
}

const DifficultyMeter = ({difficulty, difficultyTitle, title,size}:Props) => {



  return (
    <div >
        <h3 className='fw-bold fs-5 text-secondary mt-3'>{title}</h3>
        <div className={`${size} mx-auto`}>
            <ProgressBar>
                <ProgressBar striped variant="info" now={33} key={1}/>
                <ProgressBar striped variant="warning" now={33} key={2}/>
                <ProgressBar striped variant="danger" now={34} key={3}/>
            </ProgressBar>
            <div className={alignTxtByDifficultyLevel(difficulty)+" px-3"}>
                <GoTriangleUp className='text-secondary'/>
                <div className='text-primary'>{difficultyTitle}</div>
            </div>
        </div>
    </div>
  )
}

export default DifficultyMeter