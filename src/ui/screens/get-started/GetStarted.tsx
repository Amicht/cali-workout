import React from 'react'
import { LanguageCtst } from '../../../services/context/LanguageService';
import PageSubtitle from '../../components/titles/PageSubtitle';
import PageTitle from '../../components/titles/PageTitle';
import UserPlan from './user-plan/UserPlan';


const GetStarted = () => {
  const {language} = React.useContext(LanguageCtst);

  const getRelatedRoute = (planName:string) => {
    if(planName === 'FREE PLAN') return "/choose-program"
    else return "";
  }


  return (
    <div className='screen py-3 mt-4'>
      <PageTitle title={language.plansScreen.title} />
      <PageSubtitle subtitle={language.plansScreen.subtitle} />
      <div className='row'>
          {language.plansScreen.plans.map((p, idx) => 
            <div className='col-md-4 mt-4' key={idx}>
              <UserPlan goTo={getRelatedRoute(p.name)} {...p}/>
            </div>
          )}
      </div>
    </div>
  )
}

export default GetStarted