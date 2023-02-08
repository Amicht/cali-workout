import { WorkoutModel } from "../../models/workoutModel";


export const workoutSettings = {
    startInCounter: 3,
    exerciseTime: 2,
    breakTime: {
        btwnExrc: 2,
        btwnSets: 2
    },
    totalSets: 3
}

export const initialProgramValue : WorkoutModel = {
    mslGrp:{
        push: {exercise: null},
        pull: {exercise: null},
        core: {exercise: null},
        squat: {exercise: null},
    }
}