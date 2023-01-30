import React from 'react'
// import {getExercises} from '../../../services/workoutApi/workoutApiService';
import locales from '../../../assets/locales/en.json'
import UserPlan from '../../components/user-plans/UserPlan';
import CostumBtn from '../../components/costum-button/CostumBtn';
import '../screen.scss';
import HighlightedWords from '../../components/highlighted-words/HighlightedWords';
import { Link } from 'react-router-dom';

const Home = () => {


    // React.useEffect(() => {
    //     getExercises()
    // })

  return (
    <div className='py-3 mt-4 screen'>
      <h1 className='my-3 title'>{locales.homeScreen.title.map((txt, idx) => <span key={idx}> {txt.ishighlighted? <HighlightedWords {...txt}/>: txt.txt}</span>)}</h1>
      <h2 className='my-3 subtitle mt-3'>{locales.homeScreen.subtitle}</h2>
      <div className='d-flex justify-content-evenly my-4 px-auto align-items-center mt-5'>
        <div className='col-sm-3 mt-2'>
          <Link to='/get-started'>
            <CostumBtn txt={locales.homeScreen.actionBtns[0]} theme="secondary" />
          </Link>
        </div>
        <div className='col-sm-3 mt-2'>
            <CostumBtn txt={locales.homeScreen.actionBtns[1]} theme="dark" />
        </div>
      </div>
    </div>
  )
}

export default Home