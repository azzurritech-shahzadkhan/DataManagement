import { useState } from 'react'
import CarBlue from '@/assets/images/medicine.jpg'

export const Checkout = () => {


  const [formValue, setFormValue] = useState([
    {
      name: '',
      number: '',
      email: '',
      time: '',
      instruction: '',
      paymentMethod: ''
    }
  ])

  console.log("form Value is coming here",formValue);

const handleChange=(e)=>{
const {name,value}=e.target;
  setFormValue((prevValues)=>({

    ...prevValues,
    [name]:value,
  }))


}



  // const handleSubmit = event => {
  //   event.preventDefault()
  //   if (selectedPaymentMethod !== 'Stripe')
  //     alert('Please select a payment method.')
  // }
  // payment integration


  return (
    <div className='px-3 '>
      <div className='border bg-white grid grid-cols-3 gap-3 p-2 mt-8 rounded'>
        <div className='col-span-2  '>
          <form onSubmit={makePayment}>
            <div className='rounded bg-gray-100 flex  gap-2 px-3 py-2 border'>
              <div className='flex flex-col gap-2 w-full'>
                <label>Full Name</label>
                <input
                  type='text'
                  name='name'
                  placeholder='Enter Your Name'
                  value={formValue.name}
                  onChange={handleChange}
                  className='border outline-none hover:border-black rounded px-2 py-1'
                />
              </div>
              <div className='flex flex-col gap-2  w-full'>
                <label>Mobile Number</label>
                <input
                  type='tel'
                  name='phoneNumber'
                  placeholder='Enter Your Number'
                  value={formValue.number}
                  onChange={handleChange}
                  className='border outline-none hover:border-black rounded px-2 py-1'
                />
              </div>
              <div className='flex flex-col gap-2  w-full'>
                <label>Email Address</label>
                <input
                  type='email'
                  name='email'
                  placeholder='Enter Your Email'
                  value={formValue.email}
                  onChange={handleChange}
                  className='border outline-none hover:border-black rounded px-2 py-1'
                />
              </div>
            </div>

            <div className='rounded bg-gray-100 px-3 py-2 flex flex-col gap-8 border mt-8'>
              <div className='flex flex-col gap-2 w-full'>
                <label>Choose Delivery Time</label>
                <input
                  type='date'
                  name='time'
                  placeholder='Select Time'
                  value={formValue.time}
                   onChange={handleChange}
                  className='border outline-none hover:border-black rounded px-2 py-1'
                />
              </div>
              <div className='flex flex-col gap-2 w-full'>
                <label>Special Instructions ( Optional)</label>
                <input
                  type='text'
                  name='comment'
                  placeholder='Add any comment'
                   onChange={handleChange}
                    value={formValue.comment}
                  className='border outline-none hover:border-black rounded px-2 py-1'
                />
              </div>
            </div>

            <div className='rounded bg-gray-100 px-3 py-2 flex items-center justify-between  gap-8 border mt-8'>
              <div className='flex gap-5'>
                <label>Select Payment Method:</label>
                <div className='flex gap-2 items-center'>
                  <input
                    type='radio'
                    id='stripe'
                    name='paymentMethod'
                    value='Stripe'
                 
                   onChange={handleChange}
                  />
                  <label htmlFor='stripe'>Stripe</label>
                </div>
              </div>
              <button
                type='submit'
                className='border px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-700 transition'
                onClick={makePayment}
              >
                Proceed to Payment
              </button>
            </div>
          </form>
        </div>
        <div className='col-span-1 bg-gray-100 rounded p-2 border'>
          <p className='text-gray-500 font-semibold'> Your Cart</p>
          <div className='mt-6 border-t border-gray-400 flex justify-between pt-5'>
            <div className='flex-1 flex gap-3 '>
              <div>
                <img src={CarBlue} alt='error' className='rounded' />
              </div>
              <div className='flex flex-col flex-1 justify-center gap-3'>
                <p>Tablet</p>
                <span className='border w-6 px-3 flex items-center justify-center  z-10 border-gray-400'>
                  1
                </span>
              </div>
            </div>
            <div className=' flex-1 flex  justify-end items-center'>
              <p className='text-gray-500 font-semibold '>Rs.340.00</p>
            </div>
          </div>

          <div className='flex justify-center mt-10'>
            <button className='border-b border-gray-500'>
              + Add more items
            </button>
          </div>
          <div className='flex mt-5 justify-between border-t border-gray-500 py-2'>
            <p className='text-gray-500 font-semibold'>Subtotal</p>
            <p className='text-gray-500 font-semibold'>Rs.340.00</p>
          </div>
          <div className='flex  justify-between  py-2'>
            <p className='text-gray-500 font-semibold'>Delivery Charges</p>
            <p className='text-gray-500 font-semibold'>Rs.100.00</p>
          </div>

          <div className='flex  justify-between  py-2'>
            <p className='text-gray-500 font-semibold'>Tax(16%) </p>
            <p className='text-gray-500 font-semibold'>Rs.54.40</p>
          </div>

          <div className='flex  justify-between  py-2'>
            <p className='text-gray-500 font-bold'>Grand total (Incl.Tax) </p>
            <p className='text-gray-500 font-semibold'>Rs.494.40</p>
          </div>
        </div>
      </div>
    </div>
  )
}
