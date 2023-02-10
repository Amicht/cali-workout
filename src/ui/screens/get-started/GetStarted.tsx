import React from 'react'
import { appRoutes } from '../../../services/appRoutes';
import { LanguageCtst } from '../../../services/context/LanguageService';
import PageSubtitle from '../../components/titles/PageSubtitle';
import PageTitle from '../../components/titles/PageTitle';
import UserPlan from './user-plan/UserPlan';


const GetStarted = () => {
  const {language: {
    direction,
    plansScreen, 
    chooseProgramScreen}} = React.useContext(LanguageCtst);

  return (
    <div className='screen py-3 mt-4'>
      <PageTitle title={plansScreen.title} />
      <div style={{direction: direction === 'rtl'? 'rtl':'ltr'}}>
        <PageSubtitle subtitle={plansScreen.subtitle} 
        direction={direction}/>
      </div>
      <div className='row'>
          {plansScreen.plans.map((p, idx) => 
            <div className='col-md-4 mt-4' key={'user-plan-'+ idx}>
              <UserPlan
                unavailable={plansScreen.unavailable}
                freePlanName={plansScreen.plans[0].name}
                primiumPlanName={plansScreen.plans[1].name}
                goTo={appRoutes.chooseProgramScreen} 
                joinBtnTxt={plansScreen.joinBtn}
                {...p}/>
            </div>
          )}
      </div>
    </div>
  )
}

export default GetStarted