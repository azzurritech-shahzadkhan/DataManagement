import { Minus, Plus, ShoppingCart } from 'lucide-react'
import Container from './Container'

import { useEffect } from 'react'
import { useNavigate } from 'react-router'
import { CartItem } from '@/assets/mock-data/data'
import { AddProduct, DecQuantity, IncQuantity } from '@/store/slices'
import { useDispatch, useSelector } from 'react-redux'
const Booking = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const cartProduct = useSelector(state => state.cartItem.products)
  // console.log('cartProduct is coming here', cartProduct)
  const getCookie = (name) => {
    const cookies = document.cookie.split("; ");
    for (let cookie of cookies) {
        const [key, value] = cookie.split("=");
        if (key === name) return value;
    }
    return null;
};

  useEffect(()=>{
const access_token=getCookie("accessToken")||sessionStorage.getItem("accessToken");

if(!access_token){
navigate("/")

}

  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  const totalQuantity = cartProduct.reduce(
    (acc, product) => acc + product.quantity,
    0
  )
  const handleAddCartItem = item => {
    // console.log('selected item in the stor is ging from here', item)

    dispatch(AddProduct(item))
  }

  const handleDecreaseQuantity = item => {
    dispatch(DecQuantity(item.id))
  }
  const handleIncreaseQty = item => {
    dispatch(IncQuantity(item.id))
  }

  // console.log('cart items is after import ', CartItem)
  return (
    <Container>
      <div>
        <div className=' border-white h-screen w-full'>
          <header className='flex justify-end '>
            <div
              className='bg-white p-2 rounded-[50px] relative cursor-pointer'
              onClick={() => navigate('/cart')}
            >
              <ShoppingCart className='text-blue-500' />
              <span className='absolute bg-blue-500 w-6 h-6 rounded-full top-[-5px] right-[-10px] flex items-center justify-center text-white'>
                {totalQuantity}
              </span>
            </div>
          </header>

          <div className='grid xl:grid-cols-3 md:grid-cols-2 gap-5 mt-5'>
            {CartItem.map((item, i) => (
              <div className='flex  bg-white rounded-[5px] gap-2 p-2' key={i}>
                <div className='flex-[1] h-full'>
                  <img
                    src={item.img}
                    alt='error'
                    className='w-full h-full object-cover rounded-[5px]'
                  />
                </div>
                <div className='flex-[2]'>
                  <div className='flex flex-col'>
                    <p className='text-[18px] font-bold'>{item.productName}</p>
                    <p className='text-[14px] font-normal'>
                      {item.productDescrption}
                    </p>
                  </div>
                  <div className='text-white mt-[3px] flex gap-2'>
                    <p className='text-[12px] font-medium bg-blue-700 py-[2px] px-[5px] rounded flex items-center'>
                      Rs. {item.productPrice.toFixed(2)}
                    </p>

                    {cartProduct.some(
                      product => product.id === item.id && product.quantity > 0
                    ) ? (
                      <div className='flex gap-1'>
                        <button
                          className='bg-blue-700 py-[2px] px-[2px] rounded flex items-center justify-center '
                          onClick={() => handleDecreaseQuantity(item)}
                        >
                          <Minus className='scale-[0.7] text-white' />
                        </button>
                        <button className='py-[2px] px-[10px] rounded flex items-center justify-center text-black border'>
                          {cartProduct.find(product => product.id === item.id)
                            ?.quantity || 0}
                        </button>
                        <button
                          className='bg-blue-700 py-[2px] px-[2px] rounded flex items-center justify-center border'
                          onClick={() => handleIncreaseQty(item)}
                        >
                          <Plus className='scale-[0.7] text-white' />
                        </button>
                      </div>
                    ) : (
                      <button
                        onClick={() => handleAddCartItem(item)}
                        className='bg-blue-700 text-white rounded py-[2px] px-[5px] flex items-center'
                      >
                        Add To Cart
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Booking
