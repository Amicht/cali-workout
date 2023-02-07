import { ApiQueryParamsI } from "./ApiQueryParamsI";
import { ExerciseModel } from "./ExerciseModel";
import { ProgramMuscleGroups, WorkoutCacheModel } from "./workoutCacheModel";


export interface WorkourProgramCtxtI{
    states?:{
        exercises: ExerciseModel[],
        userProgram:WorkoutCacheModel,
        isLoading:boolean
    },
    funcs?:{
        updateUserExerciseToProgram: (
            msclGrpName: keyof ProgramMuscleGroups | string, 
            exerciseName: string) => Promise<void>,
        checkIsProgramOK: () => boolean,
        getMuscleExercises: (apiCallParams: ApiQueryParamsI) => Promise<void>,
        onProgramInit:() => void,
        getUserProgram: () => WorkoutCacheModel | null,
        loadingHandler: (isLoading:boolean) => void;
    }
}