import React from 'react';
import './highlighted-words.scss'

interface HighlightedI{
    txt:string
}

const HighlightedWords = (props:HighlightedI) => {
  return (
    <span className="highlighted-words">{props.txt}</span>
  )
}

export default HighlightedWords