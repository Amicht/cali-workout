import React from 'react'
import { AboutI } from '../../../models/LanguageModel';
import PageSubtitle from '../../components/titles/PageSubtitle';
import PageTitle from '../../components/titles/PageTitle';

interface Props{
  page: AboutI
  direction: string
}


const About = ({page:{paragraphs,subtitle,title},direction}:Props) => {
    
  return (
    <div className='screen'
        style={{direction: direction==='rtl'? 'rtl':'ltr'}}>
        {/* <PageTitle title={title}/> */}
        <PageSubtitle subtitle={subtitle}/>
        {paragraphs.map(p => <div className='pt-4'>
            <h4 className='py-2'>{p.title}</h4>
            <p>{p.content}</p>
        </div>)}
    </div>
  )
}

export default About