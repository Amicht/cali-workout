import React from 'react'

const PageSubtitle = (props:{subtitle:string}) => {
  return (
    <h2 className='my-3 subtitle mt-3'>{props.subtitle}</h2>
  )
}

export default PageSubtitle