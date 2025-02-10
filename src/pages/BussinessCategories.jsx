import Container from './Container'
import eCommerce from "@/assets/images/eCommerce.jpeg";
import Health from "@/assets/images/health.jpg";
import Finance from "@/assets/images/finance.avif";
import education from "@/assets/images/education.jpg";
import smart_cities from "@/assets/images/smart_cities.jpeg";
import retailer from "@/assets/images/retailer.jpeg";

const BussinessCategories = () => {
  return (
    <Container>
      <div className='flex gap-2'>
      {/* E_commerce */}
        <div className='max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700'>
          <a href='#'>
            <img
              className='rounded-t-lg w-full  h-[150px] '
              src={eCommerce}
              alt='error'
              width='full'
              height={50}
            />
          </a>
          <div className='p-5'>
            <a href='#'>
              <h5 className='mb-2 text-2xl font-bold tracking-tight text-blue-700 dark:text-white'>
                E-commerce
              </h5>
            </a>
            <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
            <a
              href='dashboard'
              className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
            >
              Explore
              <svg
                className='rtl:rotate-180 w-3.5 h-3.5 ms-2'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 14 10'
              >
                <path
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M1 5h12m0 0L9 1m4 4L9 9'
                />
              </svg>
            </a>
          </div>
        </div>
        {/* Health_care */}
        <div className='max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700'>
          <a href='#'>
            <img
              className='rounded-t-lg w-full  h-[150px] '
              src={Health}
              alt='error'
              width='full'
              height={50}
            />
          </a>
          <div className='p-5'>
            <a href='#'>
              <h5 className='mb-2 text-2xl font-bold tracking-tight text-blue-700 dark:text-white'>
                HealthCare
              </h5>
            </a>
            <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
            <a
              href='dashboard'
              className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
            >
              Explore
              <svg
                className='rtl:rotate-180 w-3.5 h-3.5 ms-2'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 14 10'
              >
                <path
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M1 5h12m0 0L9 1m4 4L9 9'
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Finance */}
        <div className='max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700'>
          <a href='#'>
            <img
              className='rounded-t-lg w-full  h-[150px] '
              src={Finance}
              alt='error'
              width='full'
              height={50}
            />
          </a>
          <div className='p-5'>
            <a href='#'>
              <h5 className='mb-2 text-2xl font-bold tracking-tight text-blue-700 dark:text-white'>
                Finance
              </h5>
            </a>
            <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
            <a
              href='finance'
              className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
            >
              Explore
              <svg
                className='rtl:rotate-180 w-3.5 h-3.5 ms-2'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 14 10'
              >
                <path
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M1 5h12m0 0L9 1m4 4L9 9'
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
      
      <div className='flex gap-2 mt-2'>
        {/*     Education */}
        <div className='max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700'>
          <a href='#'>
            <img
              className='rounded-t-lg w-full  h-[150px] '
              src={education}
              alt='error'
              width='full'
              height={50}
            />
          </a>
          <div className='p-5'>
            <a href='#'>
              <h5 className='mb-2 text-2xl font-bold tracking-tight text-blue-700 dark:text-white'>
                Education
              </h5>
            </a>
            <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
            <a
              href='education'
              className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
            >
              Explore
              <svg
                className='rtl:rotate-180 w-3.5 h-3.5 ms-2'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 14 10'
              >
                <path
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M1 5h12m0 0L9 1m4 4L9 9'
                />
              </svg>
            </a>
          </div>
        </div>
        {/* Smart_cities */}
        <div className='max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700'>
          <a href='#'>
            <img
              className='rounded-t-lg w-full  h-[150px] '
              src={smart_cities}
              alt='error'
              width='full'
              height={50}
            />
          </a>
          <div className='p-5'>
            <a href='#'>
              <h5 className='mb-2 text-2xl font-bold tracking-tight text-blue-700 dark:text-white'>
                Smart Cities & Io T:
              </h5>
            </a>
            <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
            <a
              href='smart-cities'
              className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
            >
              Explore
              <svg
                className='rtl:rotate-180 w-3.5 h-3.5 ms-2'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 14 10'
              >
                <path
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M1 5h12m0 0L9 1m4 4L9 9'
                />
              </svg>
            </a>
          </div>
        </div>
        {/* Retail */}
        <div className='max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700'>
          <a href='#'>
            <img
              className='rounded-t-lg w-full  h-[150px] '
              src={retailer}
              alt='error'
              width='full'
              height={50}
            />
          </a>
          <div className='p-5'>
            <a href='#'>
              <h5 className='mb-2 text-2xl font-bold tracking-tight text-blue-700 dark:text-white'>
                Retail
              </h5>
            </a>
            <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
            <a
              href='retail'
              className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
            >
              Explore
              <svg
                className='rtl:rotate-180 w-3.5 h-3.5 ms-2'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 14 10'
              >
                <path
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M1 5h12m0 0L9 1m4 4L9 9'
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default BussinessCategories
