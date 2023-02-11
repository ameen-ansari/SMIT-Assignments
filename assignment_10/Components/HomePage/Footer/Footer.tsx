import style from '/styles/HomePage/Footer.module.css'

const Footer = () => {
  return (
    <div className={style.parent}>
      <div className={style.footerFlex}>
        <div>
          <p>HypeIndustry</p>
          <p>HypeIndustry Concept</p>
          <p>Buying Guide</p>
          <p>Selling Guide</p>
        </div>
        <div>
          <p>Hype Offers</p>
          <p>Footwear</p>
          <p>Apparel</p>
          <p>Accessories</p>
        </div>
        <div>
          <p>Shipping</p>
          <p>Shipping for buyers</p>
          <p>Shipping for sellers</p>
        </div>
        <div>
          <p>Contact Us</p>
          <p>ameen55668@gmail.com</p>
          <p>ameenansari55667@gmail.com</p>
        </div>
      </div>
      <hr />
      <div>
        <p>© 2022 HypeIndustry</p>
      </div>
    </div>
  )
}
export default Footer
