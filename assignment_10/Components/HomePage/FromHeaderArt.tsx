import style from '/styles/Shipping/Part1.module.css'
import Image from 'next/image'
import BgImg from '/Images/HomePage/Rectangle 1 (Traced).png'
import BtnBr from './Btn-With-Br/BtnBr'
const Part1 = () => {
  return (
    <div className={style.parent}>
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
              name, Company name or Store Name, Address, Credit Card info etc...
            </p>
          </div>
          <div>
            <div className={style.circles}>2</div>
            <p>
              You will then receive email alerts whenever any seller posts an
              offer on the platform. Then it is up to you to click on the link
              to view the offer or not. Of course, each email alert contains the
              offer details and models, so you know what has been posted, and if
              it is in any of your interest to purchase or not.
            </p>
          </div>
          <div>
            <div className={style.circles}>3</div>
            <p>
              The offer can either be: an “open stock inventory”, meaning you
              can select any sizes you want from the seller stock with of course
              a minimum quantity imposed by the seller , or a “buy all /take all
              offer”, which means that the seller wants you to buy all the
              quantities in that specific model. Usually “buy all deals” have a
              higher discounted purchase price. Keep in mind, once you place an
              order on an open stock model, the stock is live and updated right
              away for the next buyer, which will reflect less quantities in the
              inventory...until it reaches a: “sold out” status.
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
              Once the seller approves the order, (this might take 10 min or up
              to to 3 days) your credit card will be charged, and you will
              receive an email with a tracking number. NO charges will be done
              unless orders are APPROVED ! We created a dashboard for buyers so
              you can see all the information you need: invoice number, tracking
              number, carrier /shipper, pdf downloadable invoices etc...Now, you
              have your own excel accounting sheet with you all the time.
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
  )
}
export default Part1
