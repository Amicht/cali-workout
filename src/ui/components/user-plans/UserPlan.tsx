import React from 'react';
import { BsCheck2Circle } from "react-icons/bs";
import CostumBtn from '../costum-button/CostumBtn';
import { Link } from 'react-router-dom';
import './user-plan.scss';

interface UserPlanI{
    price: number;
    name: string;
    features: string[];
    goTo: string
}

const UserPlan = (props:UserPlanI) => {

    
  return (
    <div className={props.name==="PREMIUM PLAN"?'user-plan-card-premium':'user-plan-card'}>
        <div className='container text-start mx-2 px-5 mt-5'>
            <h2 className='fs-6 mt-4'>{props.name}</h2>
            <h3 className='fs-1 fw-bold mt-4'>${props.price}</h3>
            <ul className='text-start mt-4'>{props.features.map((f,idx) => <li key={idx}><BsCheck2Circle/>  {f}</li>)}</ul>
            <div className='row my-4 mx-1 mt-5'>
              <Link to={props.goTo}>
                <CostumBtn txt='Join Now' theme={props.name==="PREMIUM PLAN"?"light":"dark"}/>
              </Link>
            </div>
        </div>
    </div>
  )
}

export default UserPlan