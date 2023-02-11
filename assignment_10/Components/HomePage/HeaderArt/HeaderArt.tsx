import style from '/styles/HomePage/HeaderArt.module.css'
import Image from 'next/image'
import BgImg from '/Images/HomePage/Rectangle 1 (Traced).png'
import BtnBr from '../Btn-With-Br/BtnBr'
import vouture from '/Images/HomePage/Vector (5).png'
import box from '/Images/HomePage/box.png'
import Part1 from '../FromHeaderArt'
import Part2 from '../FromHeaderArt2'
const HeaderArt = () => {
  return (
    <>
    
      {/* <div className={style.parent}>
        <p>Selling on HypeIndustry</p>
        <div>
          <ul className={style.tabs}>
            <li>BECOME A SELLER</li>
            <li>CREATE A LISTING</li>
            <li>SELLER FEES</li>
            <li>CONDITION OF ITEMS</li>
          </ul>
        </div>
        <div>
          <ul className={style.tabs2}>
            <li>How do I sell on HypeIndustry? &or; </li>
            <li>
              To ensure the quality and authenticity of all items on our
              marketplace, we only allow a select group of stores and sellers
              that have passed our verification process, to sell on our
              platform. We encourage you to request to become a seller by
              filling out all the required information. We’ll notify you as soon
              as your request has been approved.
            </li>
            <li>
              I requested to become a SELLER, how long will it take to get
              approved? &or;
            </li>
            <li>How do I delete my Account? &or;</li>
            <li>Can I share my seller privileges with others? &or;</li>
            <li>Can I create several Seller Accounts? &or;</li>
            <li>
              How do I become a seller if I have a store outside the USA? &or;
            </li>
          </ul>
        </div>
      </div> */}
        <Part2 />
        <Part1 />


      
      <div className={style.SLart}>
        <div>
          <Image src={vouture} alt="Vouture" />
          <p>Shipping for buyers</p>
          <p>
            All of our items are being shipped from several warehouses/stores in
            the USA and worldwide, and usually ships within 24 H to 5 business
            days depending on the seller’s shipping time.
          </p>
          <a href="/">Learn more &#62;</a>
        </div>
        <div>
          <Image src={box} alt="3DBox" width={39} height={44} />
          <p>Shipping for Sellers</p>
          <p>
            Once you have approved the purchase, you can request for your labels
            by email at: shipping@hypeindustry.com! Make sure to include:
            Buyer’s details...
          </p>
          <a href="/">Learn more &#62;</a>
        </div>
      </div>
    </>
  )
}
export default HeaderArt
