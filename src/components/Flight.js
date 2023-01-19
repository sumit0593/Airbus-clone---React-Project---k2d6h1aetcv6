import React from 'react'
import '../styles/Style.css'

const Flight = ({plane}) => {
    return (
        <div className='flex  border-1 shadow-lg my-1 px-2  justify-between w-full h-[8rem] ' >
            <div className='flex flex-col items-center justify-center mx-3 '>
                <p className='place-self-start text-slate-400 text-sm ' >Airline Name</p>
                <p className='text-lg ' >{plane.airlineName}</p>
            </div>
            <div className='flex flex-col items-center justify-center mx-3 '>
                <p className='place-self-start text-slate-400 text-sm ' >From</p>
                <p className='text-lg ' >{plane.from}</p>
            </div>
            <div className='flex flex-col items-center justify-center' >
                <img 
                    src="https://media2.giphy.com/media/iCEPetKVHKDOVOzMSi/giphy.gif?cid=ecf05e476g9lt4kweigpdc7b50oj7s4heyqcb0cxpnlquu7a&rid=giphy.gif" 
                    alt="light"
                    width={100}
                    height={70} 
                 />
            </div>
            <div className='flex flex-col items-center justify-center mx-3 '>
                <p className='place-self-start text-slate-400 text-sm ' >to</p>
                <p className='text-lg ' >{plane.to}</p>
            </div>
            <div className='flex flex-col items-center justify-center mx-3 '>
                <p className='place-self-start text-slate-400 text-sm ' >Depart</p>
                <p className='text-lg ' >{plane.departure.departureDate}</p>
            </div>
            <div className='flex flex-col items-center justify-center mx-3 '>
                <p className='place-self-start text-slate-400 text-sm ' >Flight Brand</p>
                <p className='text-lg ' >{plane.airlineName}</p>
            </div>
        </div>
    )
}

export default Flight
