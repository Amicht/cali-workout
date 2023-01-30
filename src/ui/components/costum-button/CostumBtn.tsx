import './costum-btn.scss'

interface CostumBtnI{
  txt:string,
  theme: "light" | "dark" | "secondary"
}

const CostumBtn = (props:CostumBtnI) => {

  const classes = {
    light: "costum-light-btn",
    secondary: "costum-secondary-btn",
    dark: "costum-dark-btn"
  }

  return (
    <button className={`costum-btn ${classes[props.theme]} py-2`}>
      {props.txt}
    </button>
  )
}

export default CostumBtn