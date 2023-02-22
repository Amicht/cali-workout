import React from 'react'
import { AiOutlineCheck } from 'react-icons/ai'
import './step-btn.scss';

interface Props{
    stepNumber: number
    stepName: string
    isFinished: boolean
    isCurrentStep: boolean
    onStepClick: () => void
}

const StepBtnComponent = (props:Props) => {

  const {stepName,stepNumber,isFinished,isCurrentStep, onStepClick} = props;
  
  return (
    <div 
      onClick={onStepClick}
      className='step-title col-2 d-flex'>
        {!isCurrentStep? 
            isFinished?
            <div className='step-number step-checked'>
              <div className='mx-auto text-center'>
                <AiOutlineCheck />
              </div>
            </div>
            : <div className='step-number'>
                <div className='mx-auto text-center'>
                  <div>
                    {stepNumber}
                  </div>
                </div>
              </div>

          : <div className='step-number current-step'>
              <div className='mx-auto text-center'>
                <div className='mx-1'>
                  {stepNumber}
                </div>
              </div>
            </div>
        }
        <div className='mx-2 step-name'>{stepName}</div>
        <hr className='col fs-2'/>
    </div>
  )
}

export default StepBtnComponent