import React, { ReactNode } from 'react';
import {  WorkoutModel } from '../../models/workoutModel';
import { ExerciseModel } from '../../models/ExerciseModel';
import { getProgramFromStorage, setProgramToStorage  } from '../local-storage/workoutStorage';
import { getExercises } from '../workoutApi/apiService';
import { ApiQueryParamsI } from '../../models/ApiQueryParamsI';
import { WorkourProgramCtxtI } from '../../models/WorkourProgramCtxtI';
import { initialProgramValue } from './workoutSettings';



export const WorkourProgramCtxt = React.createContext<WorkourProgramCtxtI>({});


interface ExercisesCacheI{
    [k:string]: ExerciseModel[]
}

const exercisesCache:ExercisesCacheI = {};


const WorkourProgramService = (props:{children?:ReactNode}) => {

    const [userProgram,setUserProgram] = React.useState<WorkoutModel>(initialProgramValue);
    const [exercises,setExercises] = React.useState<ExerciseModel[]>([]);
    const [isLoading, setIsLoading] = React.useState<boolean>(false);


    const updateUserExerciseToProgram = async (msclGrpName:string , exerciseName:string) => {
        let newExercise = exercises.find(ex => ex.name === exerciseName) || null;
        const updatedProgram = {...userProgram};
        
        // @ts-ignore: Unreachable code error
        if( !!updatedProgram.mslGrp[msclGrpName] ){
            // @ts-ignore: Unreachable code error
            updatedProgram.mslGrp[msclGrpName].exercise = newExercise;
            setUserProgram(updatedProgram);
            setProgramToStorage(updatedProgram);
        }
    }

    const getMuscleExercises = async(apiCallParams: ApiQueryParamsI) => {

        if(!!exercisesCache[apiCallParams.muscle]){
            setExercises(exercisesCache[apiCallParams.muscle])
        }
        else{
            const exs = await getExercises(apiCallParams);
            setExercises(exs);
            exercisesCache[apiCallParams.muscle] = exs;
        }
    } 

    const onProgramInit = () => {
        const program = getProgramFromStorage();
        if(!!program){ setUserProgram(program) }
        else{ 
            setUserProgram(initialProgramValue);
            setProgramToStorage(userProgram); 
        }
    }

    const checkIsProgramOK = ():boolean => {
        const program:WorkoutModel | null = getProgramFromStorage();
        if(!!program){
            return (Object.values(program.mslGrp).filter(msclGrp => !msclGrp.exercise).length) === 0;
        }
        return false;
    }

    const loadingHandler = (isLoadingNow:boolean) => setIsLoading(isLoadingNow);

    const getUserProgram = () => {
        const program = getProgramFromStorage();
        if(!program) return null
        return program;
    }

    const states ={
        exercises,
        userProgram,
        isLoading
    }

    const funcs = {
        updateUserExerciseToProgram,
        checkIsProgramOK,
        getMuscleExercises,
        onProgramInit,
        getUserProgram,
        loadingHandler
    }


  return (
    <WorkourProgramCtxt.Provider value={{states, funcs}}>
        {props.children}
    </WorkourProgramCtxt.Provider>
  )
}

export default WorkourProgramService

