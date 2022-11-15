import style  from '/styles/HeaderArt.module.css'
const HeaderArt = () =>{
  return (
    <div className={style.parent}>
        <p >Selling on HypeIndustry</p>
        <div>
            <ul className={style.tabs}>
                <li>BECOME A SELLER</li>
                <li>CREATE A LISTING</li>
                <li>SELLER FEES</li>
                <li>CONDITION OF ITEMS</li>
            </ul>
        </div>
        <div >
            <ul className={style.tabs2}>
                <li>How do I sell on HypeIndustry? &or; </li>
                <li>To ensure the quality and authenticity of all items on our marketplace, we only allow a select group of stores and sellers that have passed our verification process, to sell on our platform. We encourage you to request to become a seller by filling out all the required information. We’ll notify you as soon as your request has been approved.</li>
                <li>I requested to become a SELLER, how long will it take to get approved? &or;</li>
                <li>How do I delete my Account? &or;</li>
                <li>Can I share my seller privileges with others? &or;</li>
                <li>Can I create several Seller Accounts? &or;</li>
                <li>How do I become a seller if I have a store outside the USA? &or;</li>
            </ul>
        </div>
    </div>
  )
}
export default HeaderArt
