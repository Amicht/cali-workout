import React from 'react'
import CostumBtn from '../../components/costum-button/CostumBtn';
import '../screen.scss';
import { Link } from 'react-router-dom';
import PageTitle from '../../components/titles/PageTitle';
import PageSubtitle from '../../components/titles/PageSubtitle';
import { LanguageCtst } from '../../../services/context/LanguageService';
import { appRoutes } from '../../../services/appRoutes';

const Home = () => {
  const {language} = React.useContext(LanguageCtst);
  const btns = [
    {
      side: 'btn-left', 
      txt: language.homeScreen.actionBtns[0], 
      theme: "secondary",
      link: appRoutes.plansScreen
    },
    {
      side: 'btn-right', 
      txt: language.homeScreen.actionBtns[1], 
      theme: "dark",
      link: appRoutes.about
    }
  ]

  return (
    <div className='py-3 mt-4 screen'>

      <PageTitle title={language.homeScreen.title}
        direction={language.direction} />

      <PageSubtitle subtitle={language.homeScreen.subtitle}
      direction={language.direction}  />

      <div 
        className='d-flex justify-content-center my-4 px-auto  mt-5'>
        
        {btns.map((btn, idx) => 
          <div 
            className='col-sm-3 mt-2 px-1'
            key={btn.txt + idx}>

              <Link to={btn.link}>
                <CostumBtn 
                  side={btn.side}
                  txt={btn.txt} 
                  theme={btn.theme} />
              </Link>

          </div>)}

      </div>
    </div>
  )
}

export default Home