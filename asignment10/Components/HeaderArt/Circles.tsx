import style from '/styles/Btn/Circles.module.css'

const Circles = (props:any) => {
return(
    <div className={style.parent}>
        {props.value}
    </div>
)
}
export default Circles