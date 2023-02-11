import Image from 'next/image'
import style from '/styles/HomePage/Navbar.module.css'
import logo from '/Images/HomePage/logo.png'
import search from '/Images/HomePage/search.png'
import user from '/Images/HomePage/user (1).png'
import or from '/Images/HomePage/Vector.png'

const Navbar = () => {
  return (
    <div className={style.parent}>
      <div className={style.firstPart}>
        <ul className={style.tabs}>
          <li>
            <Image src={logo} alt="Page Logo" width={45} height={45} />
          </li>
          <li>Hypeindustry <Image src={or} alt='or' /></li>
          <li> Hype Offers <Image src={or} alt='or' /></li>
          <li> Shipping <Image src={or} alt='or' /></li>
          <li> Seller Request Form <Image src={or} alt='or' /></li>
        </ul>
      </div>
      <div className={style.secondPart}>
        <div>
            <Image src={user} alt="Men" width={17} height={17} /><span>Login</span>
        </div>
        <div className={style.search}>
            <Image src={search} alt="Men" width={17} height={17} />
            <input type="text" placeholder='Brand,models...'/>
        </div>
      </div>
    </div>
  )
}

export default Navbar
