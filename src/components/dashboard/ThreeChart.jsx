import { CustomerAgeChat } from "./CustomerAgeChart"
import { CustomerGendarChat } from "./CustomerGendarChart"
import { CustomerRecomendationChat } from "./CustomerRecomendationChart"


const ThreeChart = () => {
  return (
    <div className="grid grid-cols-3 gap-[27px]">
        <div >
            <CustomerRecomendationChat/>
        </div>
        <div >
            <CustomerGendarChat/>
        </div>
        <div ><CustomerAgeChat/></div>
    </div>
  )
}

export default ThreeChart