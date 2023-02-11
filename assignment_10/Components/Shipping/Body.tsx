import style from '/styles/Shipping/Body.module.css'
import up from '/Images/Shiping/Vector (7).png'
import down from '/Images/Shiping/Vector (6).png'

import hhrr from '/Images/Shiping/Vector 5.png'
import Image from 'next/image'

const Body = () => {
  return (
    <div className={style.parent}>
      <div>
        <p>
          Can I order other items that are not offered on the platform? Do you
          offer pre-order?
        </p>
        <Image src={up} alt="up" />
      </div>
      <Image src={hhrr} alt="up" />

      <div>
        <p>
          NO not at all, only what is offered on the platform is available to
          purchase! We have new items on a daily basis, so check back often!No
          pre order, this is a live offer with product in stock !!!!
        </p>
      </div>
      <div>
        <p>Sizing</p>
        <Image src={down} alt="up" />
      </div>
      <Image src={hhrr} alt="up" />

      <div>
        <p>Shipment Damage</p>
        <Image src={down} alt="up" />
      </div>
      <Image src={hhrr} alt="up" />

      <div>
        <p>Minimum orders</p>
        <Image src={down} alt="up" />
      </div>
      <Image src={hhrr} alt="up" />

      <div>
        <p>Taxes and Duties</p>
        <Image src={down} alt="up" />
      </div>
      <Image src={hhrr} alt="up" />
    </div>
  )
}
export default Body
