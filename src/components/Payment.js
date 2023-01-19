import React , {useContext} from 'react'
import {MediumContext} from '../context/MediumContext'

const Payment = ({data}) => {

    const { des , ret  } = useContext(MediumContext)

    return (
        <div className='flex flex-col p-4 bg-blue-400 justify-evenly items-center w-3/5 ' >
            <div className='flex flex-col justify-evenly items-center ' >
                <h1 className='text-7xl font-xl mt-2 mb-4' >Ticket Detail</h1>
                <div className='flex justify-evenly border-b-4 bg-amber-400 text-white' >
                    <div className='text-6xl font-medium place-self-center' >{data.from}</div>
                    <div className='flex flex-col' >
                        <img
                            src="https://media0.giphy.com/media/hVxJUqWXVrCGTDpnVU/giphy.gif?cid=790b761144290eb0b81c365ba65adaefbd0a829c4da1fd76&rid=giphy.gif"
                            alt="logo"
                            width={130}
                            height={80}
                        />
                    </div>
                    <div className='text-6xl font-medium place-self-center' >{data.to}</div>
                </div>
                <div className='flex flex-col justify-center items-center border-b-1' >
                            <h1 className='text-xl my-1' ><span className='text-xl'>Duration: </span> {data.duration} </h1>
                            <h1 className='text-xl my-1' ><span className='text-xl'>Airplane Name: </span>{data.airlineName}</h1>
                </div>
                <div className='flex justify-around items-center p-2 mt-5' >
                    <div className='mr-5 flex flex-col items-center' >
                        <div className='flex flex-col justify-evenly items-center p-1 border-b-1'>
                            <h1 className='text-3xl  font-lg' >Departure</h1>
                            <p className='text-xl' ><span>Date: </span>{des}</p>
                            <p className='text-xl' ><span>Time: </span>{data.departure.departureTime}</p>
                        </div>
                        <div className='flex flex-col justify-evenly items-center p-1 border-b-1'>
                            <h1 className='text-3xl font-lg' >Return</h1>
                            <p className='text-xl' ><span>Date: </span> {ret}</p>
                            <p className='text-xl' ><span>Time: </span> {data.return.returnTime}</p>
                        </div>
                    </div>
                    <div className='ml-5' >
                            <div className=' bg-blue-600 text-white flex flex-col justify-evenly items-center p-3 mt-2' >
                                <h1 className='text-5xl mb-3 ' >Fare Summary</h1>
                                <div className='border-b-1 mb-3' >
                                    <h1 className='text-xl' ><span className='text-2xl'>Flight Price: </span>Rs. {data.price}</h1>
                                    <h1 className='text-xl' ><span className='text-2xl'>Extra Charge: </span>Rs. 500</h1>
                                </div>
                                <h1 className='text-xl border-b-2 border-t-2 ' ><span className='text-2xl'>Total </span>Rs. {parseInt(data.price) + 500}</h1>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment