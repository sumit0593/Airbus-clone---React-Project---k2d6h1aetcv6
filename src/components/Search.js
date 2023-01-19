import React , {useContext} from 'react'
import { MediumContext } from '../context/MediumContext';

const Search = ({start , last , switch1}) => {

    const { setdes , setret  } = useContext(MediumContext)
    function hundleDep(e){
           setdes(e.target.value);
    }
    function hundleRet(e){
        setret(e.target.value);
    }

    return (
        <div className='flex items-center justify-center flex-col'>
            <div className='flex flex-col ' >
                <h1 className='text-5xl my-3 text-white font-medium place-self-start' >LET START JEURNEY</h1>
                <div className='h-[7rem] rounded-lg bg-white flex items-center justify-center p-5 ' >
                 
                    <div className='flex flex-col items-center justify-center mx-3 '>
                        <p className='place-self-start text-slate-400 text-sm ' >From</p>
                        <input type="text" onChange={(e)=>{start(e.target.value)}}  placeholder='DELHI' className='border-b-4 ' />
                    </div>
                    <div className='flex flex-col items-center justify-center mx-3 '>
                        <p className='place-self-start text-slate-400 text-sm ' >to</p>
                        <input type="text" onChange={(e)=>{last(e.target.value)}} placeholder='MUMBAI' className='border-b-4 ' />
                    </div>
                    <div className='flex flex-col items-center justify-center mx-3 '>
                        <p className='place-self-start text-slate-400 text-sm ' >Depart</p>
                        <input type="date" className='border-b-4 ' onChange={hundleDep} />
                    </div>
                    <div className='flex flex-col items-center justify-center mx-3 '>
                        <p className='place-self-start text-slate-400 text-sm ' >Return</p>
                        <input type="date" className='border-b-4 ' onChange={hundleRet} />
                    </div>

                    <button className='bg-amber-400 py-2 px-8 rounded-lg text-base shadow-lg ' onClick={switch1} >
                        SEARCH FLIGHTS
                    </button>
                 
                </div>
            </div>
        </div>
    )
}

export default Search
