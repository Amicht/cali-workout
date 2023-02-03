import { WorkoutCacheModel } from "../../models/workoutCacheModel";

const WORKOUTKEY = "Workout-program";

const setProgramToStorage = (program:WorkoutCacheModel) => window.localStorage.setItem(WORKOUTKEY, JSON.stringify(program));

const getProgramFromStorage = ():WorkoutCacheModel | null => {
    const myWorkout = localStorage.getItem(WORKOUTKEY);
    if(myWorkout) return JSON.parse(myWorkout);
    else return null;
}



export {
    getProgramFromStorage,
    setProgramToStorage,
}