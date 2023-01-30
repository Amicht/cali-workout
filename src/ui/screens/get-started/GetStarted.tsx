import React from 'react'
import locales from '../../../assets/locales/en.json';
import HighlightedWords from '../../components/highlighted-words/HighlightedWords';
import UserPlan from '../../components/user-plans/UserPlan';


const GetStarted = () => {

  const getRelatedRoute = (planName:string) => {
    if(planName === 'FREE PLAN') return "/choose-program"
    else return "";
  }


  return (
    <div className='screen py-3 mt-4'>
      <h1 className='my-3 title'>
        {locales.plansScreen.title.map((txt, idx) => <span key={idx}>
          {txt.ishighlighted? <HighlightedWords {...txt}/>: txt.txt} </span>)}
      </h1>   
      <h2 className='my-3 subtitle mt-3'>{locales.plansScreen.subtitle}</h2>
      <div className='row'>
          {locales.plansScreen.plans.map((p, idx) => 
            <div className='col-md-4 mt-4' key={idx}>
              <UserPlan goTo={getRelatedRoute(p.name)} {...p}/>
            </div>
          )}
      </div>
    </div>
  )
}

export default GetStarted