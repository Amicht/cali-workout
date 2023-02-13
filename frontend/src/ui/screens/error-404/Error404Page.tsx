import React from 'react'
import { Link } from 'react-router-dom'
import { LanguageCtst } from '../../../services/context/LanguageService'
import CostumBtn from '../../components/costum-button/CostumBtn'
import PageSubtitle from '../../components/titles/PageSubtitle'
import PageTitle from '../../components/titles/PageTitle'

const Error404Page = () => {
    const {language:{errorPage}} = React.useContext(LanguageCtst);

  return (
    <div className='screen'>
        <PageTitle title={errorPage.title}/>
        <PageSubtitle subtitle={errorPage.subtitle}/>
        <div className='col-md-4 mx-auto mt-4 py-5'>
            <Link to={'/'}>
                <CostumBtn     
                    theme='secondary' 
                    txt={errorPage.btnTxt}/>
            </Link>
        </div>
    </div>
  )
}

export default Error404Page