import './loading.scss';
import React from 'react'

const LoadingComponent = () => {

  const [marginTop, setMarginTop ] = React.useState((window.innerHeight / 2) - 50);


  React.useEffect(() => {
      window.addEventListener('resize', () => {
        setMarginTop((window.innerHeight / 2) - 50);
      });
  });

  return (
    <div className='loading bg-dark'>
        <div 
            style={{marginTop}}
            className="spinner-border text-secondary spinner-loading mx-auto" 
            role="status">
        </div>
    </div>
  )
}

export default LoadingComponent