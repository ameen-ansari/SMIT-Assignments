import style from '/styles/HomePage/HeaderArt.module.css'
import Image from 'next/image'
import BgImg from '/Images/HomePage/Rectangle 1 (Traced).png'
import BtnBr from '../Btn-With-Br/BtnBr'
import vouture from '/Images/HomePage/Vector (5).png'
import box from '/Images/HomePage/box.png'
const HeaderArt = () => {
  return (
    <>
      <div className={style.parent}>
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
        <div className={style.tabs3}>
          <p>Buying on Hypeindustry is simple!</p>
          <div className={style.bgimg}>
            <Image src={BgImg} alt="Background-Image" />
          </div>
          <div className={style.circlesParent}>
            <div>
              <div className={style.circles}>1</div>
              <p>
                Create a buyer account / profile, with all required fields: Full
                name, Company name or Store Name, Address, Credit Card info
                etc...
              </p>
            </div>
            <div>
              <div className={style.circles}>2</div>
              <p>
                You will then receive email alerts whenever any seller posts an
                offer on the platform. Then it is up to you to click on the link
                to view the offer or not. Of course, each email alert contains
                the offer details and models, so you know what has been posted,
                and if it is in any of your interest to purchase or not.
              </p>
            </div>
            <div>
              <div className={style.circles}>3</div>
              <p>
                The offer can either be: an “open stock inventory”, meaning you
                can select any sizes you want from the seller stock with of
                course a minimum quantity imposed by the seller , or a “buy all
                /take all offer”, which means that the seller wants you to buy
                all the quantities in that specific model. Usually “buy all
                deals” have a higher discounted purchase price. Keep in mind,
                once you place an order on an open stock model, the stock is
                live and updated right away for the next buyer, which will
                reflect less quantities in the inventory...until it reaches a:
                “sold out” status.
              </p>
            </div>
            <div>
              <div className={style.circles}>4</div>
              <p>
                Once logged in, simply view the offer and click on any of the
                models you wish to order by clicking on the “open stock / or buy
                all” buttons.
              </p>
            </div>
            <div>
              <div className={style.circles}>5</div>
              <p>
                Once the seller approves the order, (this might take 10 min or
                up to to 3 days) your credit card will be charged, and you will
                receive an email with a tracking number. NO charges will be done
                unless orders are APPROVED ! We created a dashboard for buyers
                so you can see all the information you need: invoice number,
                tracking number, carrier /shipper, pdf downloadable invoices
                etc...Now, you have your own excel accounting sheet with you all
                the time.
              </p>
            </div>
            <div>
              <div className={style.circles}>6</div>
              <p>
                Please keep in mind: there are no refunds, no returns, no order
                cancellations, all sales are finals unless the wrong items were
                shipped! This is a B2B Platform.
              </p>
            </div>
            <div>
              <BtnBr data="Learn more" />
            </div>
          </div>
        </div>
      </div>
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
