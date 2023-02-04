import React, { ReactNode } from 'react';
import { ProgramMuscleGroups, WorkoutCacheModel } from '../../models/workoutCacheModel';
import { ExerciseModel } from '../../models/ExerciseModel';
import { getProgramFromStorage, setProgramToStorage  } from '../local-storage/workoutStorage';
import { getExercises } from '../workoutApi/apiService';
import { ApiQueryParamsI } from '../../models/ApiQueryParamsI';

export const WorkourProgramCtxt = React.createContext<any>({});


const initialProgramValue : WorkoutCacheModel = {
    mslGrp:{
        push: {exercise: null},
        pull: {exercise: null},
        core: {exercise: null},
        squat: {exercise: null},
    },
    sets:{
        target:5,
        current: 0,
        break:{
            sets:90,
            exrcs: 20
        }
    }
}


const WorkourProgramService = (props:{children?:ReactNode}) => {

    const [userProgram,setUserProgram] = React.useState<WorkoutCacheModel>(initialProgramValue);
    const [exercises,setExercises] = React.useState<ExerciseModel[]>([]);
    const [isLoading, setIsLoading] = React.useState<boolean>(false);


    const updateUserExerciseToProgram = async (msclGrpName:keyof ProgramMuscleGroups , exerciseName:string) => {
        let newExercise = exercises.find(ex => ex.name === exerciseName) || null;
        const updatedProgram = {...userProgram};
        updatedProgram.mslGrp[msclGrpName].exercise = newExercise;
        setUserProgram(updatedProgram);
        setProgramToStorage(updatedProgram);
    }

    const getMuscleExercises = async(apiCallParams: ApiQueryParamsI) => {
        const exs = await getExercises(apiCallParams);
        setExercises(exs);
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
        const program:WorkoutCacheModel | null = getProgramFromStorage();
        if(!!program){
            return (Object.values(program.mslGrp).filter(msclGrp => !msclGrp.exercise).length) === 0;
        }
        return false;
    }

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
        getUserProgram
    }


  return (
    <WorkourProgramCtxt.Provider value={{states, funcs}}>
        {props.children}
    </WorkourProgramCtxt.Provider>
  )
}

export default WorkourProgramService

