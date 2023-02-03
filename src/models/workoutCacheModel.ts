import { ExerciseModel } from "./WorkoutModel";


export interface MusleGroupProgramDefs{
    exercise: ExerciseModel | null,
    time?: number,
    rep?: number
}

export interface ProgramMuscleGroups{
    pull: MusleGroupProgramDefs
    push: MusleGroupProgramDefs
    squat: MusleGroupProgramDefs
    core: MusleGroupProgramDefs
}

export interface ProgramSetDefs{
    target:number,
    current: number 
}


export interface WorkoutCacheModel{
    mslGrp:ProgramMuscleGroups,
    sets?:ProgramSetDefs,

}