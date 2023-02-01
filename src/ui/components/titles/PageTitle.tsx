import React from 'react';
import HighlightedWords from '../highlighted-words/HighlightedWords';

interface TitlePartI{
    ishighlighted:boolean,
    txt:string
}

const PageTitle = (props:{title:TitlePartI[]}) => {
    const {title} = props;
    return (
        <h1 className='my-3 title'>
            {title.map((titlePart, idx) => 
            <span key={idx}>
                {titlePart.ishighlighted? <HighlightedWords {...titlePart}/>: titlePart.txt} 
            </span>
            )}
        </h1> 
  )
}

export default PageTitle