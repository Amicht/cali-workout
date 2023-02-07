import React from 'react'
import CostumBtn from '../../components/costum-button/CostumBtn';
import '../screen.scss';
import { Link } from 'react-router-dom';
import PageTitle from '../../components/titles/PageTitle';
import PageSubtitle from '../../components/titles/PageSubtitle';
import { LanguageCtst } from '../../../services/context/LanguageService';

const Home = () => {
  const {language} = React.useContext(LanguageCtst);


  return (
    <div className='py-3 mt-4 screen'>
      <PageTitle title={language.homeScreen.title} />
      <PageSubtitle subtitle={language.homeScreen.subtitle} />
      <div 
        className='d-flex justify-content-evenly my-4 px-auto align-items-center mt-5'>
        <div className='col-sm-3 mt-2'>
          <Link to='/get-started'>
            <CostumBtn 
              side='btn-left'
              txt={language.homeScreen.actionBtns[0]} 
              theme="secondary" />
          </Link>
        </div>
        <div className='col-sm-3 mt-2'>
            <CostumBtn 
              side='btn-right'
              txt={language.homeScreen.actionBtns[1]} 
              theme="dark" />
        </div>
      </div>
    </div>
  )
}

export default Home