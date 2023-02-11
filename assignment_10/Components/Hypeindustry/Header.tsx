import Image from 'next/image'
import icons from '/Images/Hypeindustry/icons.png'
import g3031 from '/Images/Hypeindustry/Group 3031.png'
import g3045 from '/Images/Hypeindustry/Group 3045.png'
import group from '/Images/Hypeindustry/Group.png'
import f1 from '/Images/Hypeindustry/Frame 1.png'
import f2 from '/Images/Hypeindustry/Frame 2.png'
import style from '/styles/Hypeindustry/HypeinHeader.module.css'
import one from '/Images/Hypeindustry/Package.png'
import two from '/Images/Hypeindustry/UserGear.png'
import three from '/Images/Hypeindustry/ShieldCheck.png'
import four from '/Images/Hypeindustry/LinkBreak.png'
import five from '/Images/Hypeindustry/ArrowsCounterClockwise.png'
import Footer from '../HomePage/Footer/Footer'

const HypeinHeader = () => {
  return (
    <>
      <div className={style.parent}>
        <div>
          <div>
            <p>Why HypeIndustry and what is it exactly?</p>
            <p>
              Hypeindustry is a one-of-a-kind Platform + Marketplace offering
              Bulk/Wholesale goods from Stores, Boutiques, Wholesalers &
              Resellers for the Footwear, Apparel & Accessory industry!
              Basically a new marketplace that allows you to buy in bulk (only)
              footwear, apparel etc... Buy cheaper because of the bulk volume
              discount and resell worldwide to make a small margin and keep the
              volume and recurrence active! The key to make your money fast.
            </p>
          </div>
          <div>
            <Image src={icons} alt="Header-Icon" />
          </div>
        </div>
        <div>
          <div>
            <Image src={g3031} alt="Header-Icon" />
          </div>
          <div>
            <p>20 years of relationships + experience</p>
            <p>
              The idea of building a B2B marketplace, came to us a few years
              ago. Experiencing the process of buying and selling in bulk:
              footwear, apparel etc... since early 2002 we’ve encountered issues
              and restrictions , we also faced lots of question from sellers and
              buyers, shipping issues etc... But at the end of this journey, we
              are now providing answers and solutions that will help our network
              and partners!
            </p>
          </div>
        </div>
        <div>
          <div>
            <p>Always the same issue through the years </p>
            <p>
              Many years have past of doing this bulk /wholesale trading
              business...{' '}
            </p>
            <p>
              And it is always the same questions that came to us from our
              suppliers: “Hey can you move apparel? I have too much of this
              brand etc...”, or “Can you buy any accessories?”, “Can you move
              soccer shoes?”, “I received another shipment of this model ;can
              you buy more or help me move more now?” etc...
            </p>
            <p>
              Well the answer was: “We don’t have any clients for those items,
              or let me ask around”
            </p>
          </div>
          <div>
            <Image src={group} alt="Header-Icon" />
          </div>
        </div>
        <div>
          <div>
            <Image src={g3045} alt="Header-Icon" />
          </div>
          <div>
            <p>Utopia</p>
            <p>
              In a utopian marketplace, the best option would be to move a bunch
              of footwear/apparel or else, in bulk (one shot), to: another
              reseller, store or wholesaler somewhere on planet earth.
            </p>
            <p>
              Well, there are no B2B marketplaces anywhere that deal with:
              limited/ hyped goods, or a marketplace where stores (with no brand
              account) & reseller could buy from (in bulk prices footwear,
              apparel, accessories) without any boundaries or questions! So
              let's try and create that platform: so other store owners &
              resellers/wholesalers worldwide could profit from!
            </p>
          </div>
        </div>

        {/*-------Next------*/}
        <div>
          <div>
            <p>Reality</p>
            <p>
              Stores are flooded with quantities of the same items, so what do
              they do? They flip them on well known resell platform/marketplace;
              and we are all very familiar with these marketplaces... . How can
              you sell some Yeezys or Nike, when buyers/bidders are offering a
              price of 20-35% under retail? Simple, if you are not the store
              yourself or a person who bought them at roughly 35% to 40% off
              retail... then forget it!
            </p>
            <p>So, as a store owner, we see 3 options :</p>
            <ol>
              <li>
                Sell all your sleeping inventory on certain platforms one by one
                etc. (and for sure , some models will not even sell ...so it’s a
                loss).Shipping will take a while, and you are wasting time &
                labor...
              </li>
            </ol>
          </div>
          <div>
            <Image src={f1} alt="Header-Icon" />
          </div>
        </div>
        <div>
          <div>
            <Image src={f2} alt="Header-Icon" />
          </div>
          <div>
            <ol start={2}>
              <li>
                Wholesale them to some entity or reseller you trust.But again
                they might only want to buy the good and the average stuff, that
                they can flip.
              </li>
              <li>
                Last but not least : Sell them on a platform in bulk
                anonymously, with or without a discount ! Allowing your Hyped or
                general merchandise release inventory to reach multiple
                stores/resellers in the USA and worldwide . Forget the classic
                individual B2C (business to consumer) model and , aim at other
                stores/ wholesalers .The Hype around the footwear, Apparel,
                Accessory resell market is wide and active! There are many
                options out there that need to be exploited!
              </li>
            </ol>
          </div>
        </div>
      </div>
      <div className={style.part2}>
        <div>
            <Image src={one} alt="xyz"/>
            <p>SHIPPING</p>
            <p>Sellers (stores and resellers) do not need to worry about shipment.We use the main carrier with tracking all the time !</p>
        </div>
        <div>
            <Image src={two} alt="xyz"/>
            <p>ANONYMITY</p>
            <p>By using this platform, nobody knows who the sellers are. Anonymity is respected!</p>
        </div>
        <div>
            <Image src={three} alt="xyz"/>
            <p>BRAND INTEGRITY</p>
            <p>Reputable brands dislike to see their product sell for significantly under retail and doing so, may cause stores to lose their accounts.</p>
        </div>
        <div>
            <Image src={four} alt="xyz"/>
            <p>FREEDOM</p>
            <p>Freedom for Stores/Resellers to list in bulk any inventory they want at any time they want! Inventory should sell faster this way! Better than offering a 10%-35% off coupons on their website and selling them one item at a time... let’s move the inventory ASAP! Stores are not museums: Boxes, tape, rent,electricity bill, payroll: those have a cost!</p>
        </div>
        <div>
            <Image src={five} alt="xyz"/>
            <p>”FLA$H FLIPPING”</p>
            <p>This option (for the top buyers only) allows you to re-flip a bundle or amount of items ( by adding a margin per pair) ,you just purchased , and flip it back on our platform for a limited time (1 hour window)! Creating a new avenue of profit for our clients! The profit/commission is paid right away if the bundle sells !Making money on a click of a button .The new bulk traders have arrived !</p>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default HypeinHeader
