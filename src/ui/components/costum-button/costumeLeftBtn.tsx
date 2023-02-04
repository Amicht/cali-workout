import './costum-btn.scss'

interface Props{
  txt:string,
  theme: "light" | "dark" | "secondary",
  disabled?: boolean
}


const CostumLeftBtn = (props:Props) => {

    const classes = {
      light: "costum-light-btn",
      secondary: "costum-secondary-btn",
      dark: "costum-dark-btn",
      disabled: 'disabled-btn'
    }
  
    return (
      <button className={`costum-left-btn 
        ${classes[props.theme]} 
        ${props.disabled? classes.disabled: ""} py-2`}>
        {props.disabled?'':props.txt}
      </button>
    )
}

export default CostumLeftBtn