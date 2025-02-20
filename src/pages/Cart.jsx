import CarBlue from '@/assets/images/medicine.jpg'
import { Trash2 } from 'lucide-react'
import { useNavigate } from 'react-router'
import { loadStripe } from '@stripe/stripe-js'
import {  useDispatch, useSelector } from 'react-redux'
import { DecQuantity, IncQuantity, RemoveProduct } from '@/store/slices'
import { useEffect, useState } from 'react'



const Cart = () => {

const dispatch=useDispatch()
const cartItemData = useSelector((state) => state.cartItem.products);
const [totalValue,setTotalValue]=useState(0)
    console.log("Cart Items state:", cartItemData);

  useEffect(()=>{ cartItemData.map((product)=>setTotalValue(product.totalPrice))},[cartItemData])
 

const handleDecreaseQty = (id) => {
  console.log("Decrease value is coming here:", id); // Log the ID before dispatching
  dispatch(DecQuantity(id));
};

 

const handleIncreaseQty=(id)=>{
  dispatch(IncQuantity(id))
}

    const handleRemoveProduct=(item)=>{
       dispatch(RemoveProduct({id:item.id}));
      }

    const navigate=useNavigate()

  

      const makePayment =async(e) => {
    try {
      const stripe = await loadStripe("pk_test_51QreIQAROifgBgq40iPXgLD1JUtAppNL2MIkreblCCLgmQxcweaIgF1TOqevrZp966MxZceqzYntIHD1Q9npIHPG005jlY7G6K");

      if (!stripe) {
        console.error("Stripe failed to initialize.");
        return;
      }

      const body = {
        products: [
          {
productName:"tablets",
productPrice:123,

          }
        ]
         
      };

      const headers = {
        "Content-Type": "application/json",
      };

      const response = await fetch("http://127.0.0.1:8000/api/create-checkout-session", {
        method: "POST",
        headers: headers,
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const session = await response.json();

      if (!session.id) {
        throw new Error("Session ID is missing in the response.");
      }

      const result = await stripe.redirectToCheckout({
        sessionId: session.id,
      });

      if (result.error) {
        console.error("Stripe Checkout Error:", result.error);
      }
    } catch (error) {
      console.error("Payment Error:", error);
    }
    console.log('form data is coming here', e)
  }
  return (
    <div className=' w-full px-8'>

    <div className=' mt-5 flex justify-end'>
    <button className='bg-white px-4 py-1 cursor-pointer font-semibold text-gray-600 transition hover:bg-blue-500 hover:text-white rounded' onClick={()=>navigate("/billing")}>Back</button>
    </div>
      <div className='mt-5 grid lg:grid-cols-3 grid-cols-1  gap-4'>
        <div className='col-span-2 border bg-gray-200 border-gray-400 p-3  rounded-[5px] z-40'>
            <p className="text-2xl font-medium  text-gray-500 ">Your Cart</p>
            <div className="flex justify-between mt-5 text-gray-500 font-semibold border-b-[2px] border-gray-400 pb-2">
            <button >dispatch</button>            
                <p>PRODUCT</p>
                <p>QUANTITY</p>
                <p>PRICE</p>
            </div>

            {cartItemData.map((item,i)=>
                  (
            <div className="grid grid-cols-3 justify-between  border-b-[2px]  border-gray-400 py-9 font-semibold" key={i}>
            <div className="col-span-1 flex items-center gap-1">
            <img src={CarBlue} alt="error" width="120px" className='rounded-[5px]'/>
                <p className='text-gray-500'>{cartItemData.find((product)=>product.id===item.id)?.productName}</p>
            </div>
                <div className='col-span-1 flex items-center justify-center '>
                <div className='flex border  rounded-[8px]  border-gray-500 text-gray-500'>
                    <button className='border-r border-gray-400 px-7 py-2' onClick={()=>handleDecreaseQty(item.id)}>-</button>
                    <button className='border-r border-gray-400 px-7'>{cartItemData.find(product=>product.id===item.id)?.quantity || 0}</button>
                    <button className=' border-gray-500 px-7' onClick={()=>handleIncreaseQty(item.id)}>+</button>
                </div>
                
                </div>
                    <div className='col-span-1 flex items-center justify-end  text-gray-500'>
                        <div className='flex gap-1'>
                            <p className='text-gray-500 font-semibold'>UGX349</p>
                              <Trash2 className='text-red-500 hover:text-red-600 cursor-pointer' onClick={()=>handleRemoveProduct(item)}/>
                        </div>
                    </div>


            </div>
          ))}
        </div>
        <div className="border col-span-1 p-3 bg-gray-200 rounded-[5px] z-40">
<div className=''>
<p className='text-gray-500 font-semibold text-2xl '>Cart Total</p>
<div className='flex font-semibold text-gray-500 justify-between mt-5 border-b-[2px] border-gray-400 pb-2'>

    <p>Subtotal</p>
  
    <p>price:{totalValue}</p>
   
</div>
<div className='flex font-semibold text-gray-500 justify-between mt-5 border-b-[2px] border-gray-400 pb-2'>

    <p>Shiping</p>
    <p>UGX10</p>
  
</div>
  <p className=' font-semibold text-gray-400 mt-3'>we only charge for shipping when you have over 2kg items</p>

  <div className='mt-2 border-t-[2px] flex justify-between font-semibold text-gray-500 pt-2'>
    <p>Total</p>
    <p>UGX1024.20</p>
  </div>

  <button className='bg-blue-500 text-white  p-2 rounded-[4px] mt-8 cursor-pointer hover:bg-blue-700 font-medium transition'  onClick={makePayment}>Continue to Checkout</button>
</div>

        </div>
      </div>
    </div>
  )
}

export default Cart
