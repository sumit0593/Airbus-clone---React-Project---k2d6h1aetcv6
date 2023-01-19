import React, {useEffect , useState , useContext} from 'react'
import { Link } from 'react-router-dom';
import {MediumContext} from '../context/MediumContext'


const Detail = (props) => {

  const [data , setdata] = useState([]);
  useEffect(() => {
    async function GetData(){
      const Fromtr = props.start.charAt(0).toUpperCase() + props.start.slice(1).toLowerCase()
      const Totr = props.Last.charAt(0).toUpperCase() + props.Last.slice(1).toLowerCase() 
     
      await fetch(`https://content.newtonschool.co/v1/pr/63b86a1d735f93791e09cb11/flights?from=${Fromtr}&to=${Totr}`)
           .then(res => res.json())
           .then(ele => {
                     setdata(ele)
                    })
    }
    GetData() ;
  }, [])
  const { setst  } = useContext(MediumContext)
  function hundle(){
    setst(data[0])
  }

  return (
    <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">

      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">

          <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">

            {
                data.length > 0 
                 ?(
                    <div className='flex flex-col justify-center p-2'>
                        <div className='flex justify-evenly border-b-4 bg-amber-400 text-white' >
                           <div className='text-3xl font-medium place-self-center' >{data[0].from}</div>
                           <div className='flex flex-col' >
                            <h2 className='text-base my-2' >{data[0].duration}</h2>
                            <img 
                               src="https://media0.giphy.com/media/hVxJUqWXVrCGTDpnVU/giphy.gif?cid=790b761144290eb0b81c365ba65adaefbd0a829c4da1fd76&rid=giphy.gif" 
                               alt="logo" 
                                width={100}
                                height={50}
                               />
                           </div> 
                           <div className='text-3xl font-medium place-self-center' >{data[0].to}</div>
                        </div>
                        <div className='flex justify-around items-center py-2'>
                           <div className='flex flex-col justify-center content-around border-r-1 ' >
                              <h2 className='border-b-2 text-base my-1 '><span className='font-lg' >Departure Time : </span>{data[0].departure.departureTime}</h2>
                              <h2 className='border-b-2 text-base my-1 '><span className='font-lg' >Return Time : </span>{data[0].return.returnTime}</h2>
                              <h2 className='border-b-2 text-base my-1 '><span className='font-lg' >Airplane Name : </span>{data[0].airlineName}</h2>
                           </div>
                           <div className='flex flex-col justify-center items-center border-l-1'>
                            <h1 className='text-xl my-2' ><span className='font-xl'>PRICE : </span>{data[0].price}</h1>
                           <Link to='/checkout' ><button onClick={hundle} className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                              Checkout
                            </button></Link>
                           </div>
                        </div>
                    </div> 
                 )
                 :
                 <div className='text-3xl text-grey-400 flex justify-center mt-3' >No Flight For Given Filter</div>
            }

            <div className="bg-gray-50 px-4 py-3 sm:flex justify-center sm:flex-row-reverse sm:px-6">
              <button type="button"
                className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                onClick={props.switch}
              >Cancel</button>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Detail

// onClick={props.switch} 