import React, { useEffect } from 'react'
import {getExercises} from '../services/workoutApi/workoutApiService';



const Home = () => {

    useEffect(() => {
        getExercises()
    })
  return (
    <div>home</div>
  )
}

export default Home