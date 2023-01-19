import React ,{useContext} from 'react'
import Payment from './Payment'
import {MediumContext} from '../context/MediumContext'


const Result = () => {

  
  const { st  } = useContext(MediumContext)

  return (
    <div className='flex justify-center w-full ' >

    { st ?
      <Payment data={st} />
      :(
      <div className='flex flex-col p-4 bg-blue-400 justify-center items-center w-3/5' >
      <h1 className='text-3xl font-xl mt-2 mb-4' >No ticket in your cart</h1>
      <h3 className='text-xl font-xl mt-2 mb-4' >Make a safe jurney by airbus</h3>
      <img 
          src="https://media2.giphy.com/media/iCEPetKVHKDOVOzMSi/giphy.gif?cid=ecf05e476g9lt4kweigpdc7b50oj7s4heyqcb0cxpnlquu7a&rid=giphy.gif" 
          alt="light"
          width={200}
          height={150} 
        />
      </div>)
    }

      <div className='flex flex-col justify-center items-center bg-blue-200 p-4 w-2/5' >
      <h3 className='text-3xl font-xl mt-2' >ADD CARD TO PAY</h3>
        <form className='bg-white p-4' >
          <div className="relative z-0 w-full mb-6 group">
            <input type="text" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="NAME ON CARD" required />
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input type="text" name="floating_password" id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="CARD NUMBER" required />
          </div>
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-6 group">
              <input type="date" name="floating_first_name" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="expire date" required />
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <input type="number" name="floating_last_name" id="floating_last_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="CVV" required />
            </div>
          </div>
          <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
        </form>

      </div>
    </div>
  )
}

export default Result
