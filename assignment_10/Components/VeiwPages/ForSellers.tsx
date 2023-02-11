import Navbar from '../HomePage/Navbar/Navbar'
import style from '/styles/ForSellers/ForSellers.module.css'
import hhrr from '/Images/Shiping/Vector 5.png'
import Image from 'next/image'
import screen from '/Images/Shiping/Group 5036.png'
import Footer from '../HomePage/Footer/Footer'

const ForSellers = () => {
  return (
    <div>
        <Navbar />
      <div className={style.parent}>
        <div>
          <p>How do I get my prepaid shipping LABELS?</p>
          <Image src={hhrr} alt="hr" />
          <p>
            Once you have approved the purchase, you can request for your labels
            by email at <span>ameen55668@gmail.com</span>
          </p>
          <p>
            We take care of all customs paperwork for you , so you can sleep
            well at night!
          </p>
          <ol>
            <li>
              Buyer’s details in full, name , full address and invoice number.
            </li>
            <li>Box count and if possible boxes dimension.</li>
            <li>Total pairs shipped, no need for weight.</li>
            <li>
              Pick up requested yes or no , and address for pick up if needed
            </li>
          </ol>
          <p>
            Labels are then emailed to you within 24h/48h. You can drop the
            boxes at an authorized shipper or request a pick-up. We can either
            schedule the pick-up for you, during your opening hours, or, you can
            request the pick-up yourself at your own discretion!
          </p>
          <p>How do I pack the items I have SOLD?</p>
          <Image src={hhrr} alt="hr" />
          <p>
            This process is very easy! We suggest using standard Nike or Adidas
            boxes (29x19x16 or 30x20x15 inches), and pack 12 or 13 prs per box.
            If you unfold boxes properly you may be able to fit an extra pair or
            two! Check out this video we found (we are not in that video or know
            anyone in this video) it is a tutorial for sellers who do not know
            how to flatten shoe boxes. With this method you can pack 14 to 15
            pairs versus 12 pairs per box:
          </p>
          <div>
            <Image src={screen  } alt="hr" />
          </div>
          <p>
          Do not put more than 15 pairs of shoes per box and do not fold/flatten shoe boxes, that are not foldable! For example, certain pair of shoes like Jordan retro boxes do not fold and certain adidas consortium do not fold as well so please be very careful!
          </p>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default ForSellers
