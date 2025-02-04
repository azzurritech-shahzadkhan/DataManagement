import { PriceBarChart } from './PriceBarChart'
import { ReviewsPerBrandChat } from './ReviewsPerBrandChat'

const BarChart = () => {
  return (
    <>
      <div className='grid grid-cols-2 gap-[40px]  w-full overflow-hidden '>
        <div>
          <PriceBarChart />
        </div>
        <div>
          <ReviewsPerBrandChat />
        </div>
      </div>
    </>
  )
}

export default BarChart
