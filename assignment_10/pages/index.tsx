import HomePage from '../Components/VeiwPages/HomePage'
import Hypeindustry from "../Components/VeiwPages/Hypeindustry";
import Shipping from "../Components/VeiwPages/Shipping";
import Selling from "../Components/VeiwPages/Selling";
import ForBuyers from "../Components/VeiwPages/ForBuyers";
import ForSellers from "../Components/VeiwPages/ForSellers";




export default function Home() {
  return (
    <div>
      <HomePage />
      <Hypeindustry />
      <Shipping />
      <Selling/>
      <ForBuyers />
      <ForSellers />
    </div>
  )
}
