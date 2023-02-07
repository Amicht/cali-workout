import './loading.scss'

const LoadingComponent = () => {

    const marginTop = (window.innerHeight / 2) - 50;
  return (
    <div className='loading bg-dark'>
        <div 
            style={{marginTop: marginTop}}
            className="spinner-border text-secondary spinner-loading" 
            role="status">
        </div>
    </div>
  )
}

export default LoadingComponent