import style from '/styles/Btn/BtnBr.module.css'



const BtnBr = (props:any) => {
  return (
    <div className={style.parent}>
        {props.data}
    </div>
  )
}
export default BtnBr
