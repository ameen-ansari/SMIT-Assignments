import Image from 'next/image'
import Footer from '../HomePage/Footer/Footer'
import Part1 from '../HomePage/FromHeaderArt'
import Navbar from '../HomePage/Navbar/Navbar'
import style from '/styles/ForBuyers/Body2.module.css'
import world from '/Images/Shiping/Vector (8).png'
import globe from '/Images/Shiping/Group 5030.png'

const ForBuyers = () => {
  return (
    <div>
      <Navbar />
      <div >
        <div className={style.Parent}>
          <div className={style.div1}>
            <div>
              <p>Shipping for buyers</p>
              <p>
                All of our items are being shipped from several
                warehouses/stores in the USA and worldwide, and usually ships
                within 24h to 5 business days depending on the seller’s shipping
                time.
              </p>
              <p>
                We take care of all customs paperwork for you , so you can sleep
                well at night!
              </p>
              <ol>
                <li>
                  Sellers: Just pack the shoes, tape the box(es)properly with
                  lots of tape, request your labels via email, and relax! The
                  rest will be taken care of ☺
                </li>
                <li>
                  Buyers: Don’t worry, we will make sure: a proper value, tariff
                  code and description are entered and that no problems occur
                  from the time packages leave the country and arrive in your
                  country to clear customs!
                </li>
              </ol>
            </div>
            <div>
              <Image src={globe} alt="globe-Image" />
            </div>
          </div>
          <div className={style.div2}>
            <div>
              <Image src={world} alt="World" />
            </div>
            <div>
              <p>How much does shipping COST</p>
              <p>
                The default shipping cost for sellers & buyers on the platform
                is $2.50/pair for domestic shipments within the USA, and
                $10-$12.50/pair for international express shipments. That will
                vary based on the seller & buyer location. Of course, shipping
                cost are pretty low, as we are dealing with bulk purchases,
                resulting in cost-effective shipping.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Part1 />
      <Footer />
    </div>
  )
}

export default ForBuyers
