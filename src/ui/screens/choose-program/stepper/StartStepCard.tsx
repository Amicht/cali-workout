import React from 'react'
import { useNavigate } from 'react-router-dom'
import { appRoutes } from '../../../../services/appRoutes'
import { LanguageCtst } from '../../../../services/context/LanguageService'
import CostumBtn from '../../../components/costum-button/CostumBtn'

interface Props{
    isStepsCompleted: boolean
    startBtnTxt: string
}

const StartStepCard = ({isStepsCompleted,startBtnTxt}: Props) => {
    const navigate = useNavigate();
    const {language: {chooseProgramScreen,direction}} = React.useContext(LanguageCtst)
    const unCompletedMessage = chooseProgramScreen.unCompletedMessage;
    const completedMessage = chooseProgramScreen.completedMessage;

    const onNextBtnClick = () => {
        if(isStepsCompleted){ navigate(appRoutes.workout) }
    }


  return (
    <div className='muscle-group-card mt-4'>
        <h2 style={{direction: direction=== 'rtl'? 'rtl':'ltr'}} 
            className='my-5'>
            {isStepsCompleted? 
                completedMessage: 
                unCompletedMessage}
        </h2>

        {isStepsCompleted? 
            <div onClick={onNextBtnClick} className='pt-4 col-md-4 mx-auto'>
                <CostumBtn  txt={startBtnTxt} theme='light' />
            </div> : null}
    </div>
  )
}

export default StartStepCard