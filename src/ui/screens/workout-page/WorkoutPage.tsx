import React from 'react'
import { WorkoutCacheModel } from '../../../models/workoutCacheModel';
import { WorkourProgramCtxt } from '../../../services/context/WorkoutProgramService';
import PageTitle from '../../components/titles/PageTitle';
import WorkoutSet from './workout-set/WorkoutSet';
import locales from '../../../assets/locales/en.json';


const WorkoutPage = () => {
    const {funcs: {getUserProgram}} = React.useContext(WorkourProgramCtxt);
    const [program, setProgram] = React.useState<WorkoutCacheModel | null>(null);
    
    
    React.useEffect(() => {
        const userProgram:WorkoutCacheModel | null = getUserProgram();
        if(!!userProgram){
            setProgram(userProgram)
        } 
    },[])
    
  return (
    <div className='screen text-primary mt-5'>
        <PageTitle title={locales.workout.title}/>
        <div>
            {program?<WorkoutSet 
                exrs={Object.values(program!.mslGrp).map(ex => ex.exercise)}/>
            :null
            }
        </div>
    </div>
  )
}

export default WorkoutPage