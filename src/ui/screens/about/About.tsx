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
    <div className='screen my-5'
        style={{direction: direction==='rtl'? 'rtl':'ltr'}}>
        <PageTitle title={title}/>
        <PageSubtitle subtitle={subtitle}/>
        {paragraphs.map((p) => 
        <div 
          key={p.title} 
          className='pt-4 mt-5'>
            <h4 className='py-2'>{p.title}</h4>
            <p>{p.content}</p>
        </div>)}
    </div>
  )
}

export default About