import BtnBr from '../Btn-With-Br/BtnBr'
import Image from 'next/image'
import style from '/styles/Header.module.css'
import BgImg from '/Images/Navbar/Frame 67.png'
import art1 from '/Images/Navbar/factory-workshop-interior-machines-glass-production-background 2.png'
import art2 from '/Images/Navbar/agricultural-silo 2.png'
import vertex from '/Images/Navbar/Rectangle 91.png'

const Header = () => {
  return (
    <>
      <div className={style.parent}>
        <p>New marketplace that allows you to buy in bulk</p>
        <p>
          Hypeindustry is a one-of-a-kind Platform+Marketplace offering
          Bulk/Wholesale goods from Stores, Boutiques,Wholesalers & Resellers
          for the Footwear,Apparel & Accessory industry.
        </p>
        <BtnBr data="Read more" />
        <Image src={BgImg} alt="Page Logo" />
      </div>
      {/* Article */}
      <div className={style.parent2}>
        <div className={style.art1}>
          <div>
            <Image src={art2} alt="art1" />
            <Image src={vertex} alt="art1" />
          </div>
          <div>
            <div className={style.container1}>
              <p>Why HypeIndustry and what is it</p>
              <p>
                Hypeindustry is a one-of-a-kind Platform + Marketplace offering
                Bulk/Wholesale goods from Stores, Boutiques, Wholesalers &
                Resellers for the Footwear, Apparel & Accessory industry!
                Basically a new marketplace that allows you to buy in bulk
                (only) footwear, apparel etc...
              </p>
            </div>
          </div>
        </div>
        <div className={style.art2}>
          <div>
            <Image src={art1} alt="art1" />
          </div>
          <div>
            <Image src={vertex} alt="art1" />
            <div className={style.container2}>
              <p>Buy cheaper because of the bulk volume discount and resell worldwide to make a small margin and keep the volume and recurrence active! The key to make your money fast .</p>
              <a href="/">Read more &#62;</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
