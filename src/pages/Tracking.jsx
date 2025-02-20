import axios from 'axios'
import Container from './Container'
import { useState } from 'react';

const Tracking = () => {
    const [trackingData, setTrackingData] = useState(null);

    const [orderId,setOrderId]=useState();
      const [error, setError] = useState(null);
      const [loading, setLoading] = useState(false);
      console.log("tracking number is  ", orderId)
const handleTracking = async () => {
    if (!orderId) {
      setError("Please enter an order ID.");
      return;
    }
    setLoading(true); 
    try {
      const id = {
        prompt: `Track order with ID ${orderId}.`
      };

      
      const response = await axios.post(
        "https://x7zb2lx4-8002.inc1.devtunnels.ms/api/track-order",
        id,

              {
        headers: {
          "Content-Type": "application/json", // ✅ Ensure JSON format
        },
      }

      );

      // ✅ Check if 'response.data' exists before accessing it
      if (response.data && response.data.response) {
        setTrackingData(response.data.response.output);
      } else {
        throw new Error("Invalid response format");
      }
    } catch (error) {
      setError("Error tracking the order");
      console.error("Error tracking the order:", error);
    }finally {
      setLoading(false); // ✅ Step 3: Stop loading after response
    }
  };


  return (
    <Container>
      <>
        <div className='w-full flex justify-center'>
          <div className='flex flex-col  items-center '>
            <h1 className='text-white font-bold text-2xl'>
              Track Your Shipment
            </h1>
            <p className='text-white font-semibold mt-1'>
              Enter any combination of TCS tracking Reference number.
            </p>
            <div className='flex w-full mt-5' >
            <input type='text' placeholder='enter your order number' className='text-white rounded-tl rounded-bl outline-none px-2 w-full bg-transparent border' value={orderId} 
            onChange={(e)=> setOrderId(e.target.value)}/> 
               <button
        onClick={handleTracking}
        className="bg-blue-500 text-white px-4 py-2 text-nowrap flex justify-center items-center rounded-tr rounded-br"
      >
        {loading ? ( // ✅ Step 4: Show spinner when loading
          <span className="animate-spin border-t-2 border-white border-solid rounded-full h-5 w-5 mr-2"></span>
        ) : (
          "Track Order"
        )}
      </button>
      </div>
        
              {error && <p className="text-red-500 mt-2">{error}</p>}
          </div>
        </div>
        {/* tracking part */}
        <div className='shadow-lg border p-3 mt-10 bg-white rounded'>
          <div className='bg-gray-300 p-3 rounded'>
           {trackingData && (
            <p>{trackingData}</p>)}
          </div>
        </div>
      </>
    </Container>
  )
}

export default Tracking
