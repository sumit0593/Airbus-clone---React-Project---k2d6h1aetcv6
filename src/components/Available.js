import React, { useEffect, useState } from 'react'
import Flight from './Flight'

const Available = () => {
   const [data , setdata] = useState([]);
   useEffect(() => {
     async function GetData(){
        await fetch('https://content.newtonschool.co/v1/pr/63b86a1d735f93791e09cb11/flights')
            .then(res => res.json())
            .then(ele => setdata(ele))
     }
     GetData() ;
   }, [])
      

    return (
        <div className='flex items-center justify-center flex-col  w-[50rem] h-[20rem]' >
        <h1 className='text-5xl my-3 text-white font-medium place-self-start' >AVAILABLE FLIGHTS</h1> 
        <div className='flex flex-col bg-white items-center overflow-y-auto w-full' >
          { data.map((ele , index) => (
                <Flight key={index} plane={ele} />
            ))
          }
        </div> 
        </div>
    )
}

export default Available
