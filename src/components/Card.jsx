import React from 'react';
import {FaQuoteLeft,FaQuoteRight} from 'react-icons/fa';


function Card (props) {
    
    let review = props.review;


    return(

        <div className="flex flex-col md:relative">

           <div className="absolute top-[-1rem] z-[10] mx-auto ">

             <img className="w-[140px] h-[140px] rounded-full aspect-square z-[5] " src={review.image}  />
           </div>
           <div className="w-[140px] h-[140px] bg-violet-500 rounded-full absolute top-[-6px] z-[-10] left-[10px]">

           </div>

           <div className=" text-center mt-7">
            <p className="text-2xl font-bold capitalize">{review.name}</p>
           </div>

           <div className="text-center mt-7">
            <p className="text-sm uppercase text-violet-500">{review.job}</p>
           </div>

           <div className="text-center text-violet-400 mx-auto mt-5 ">
              <FaQuoteLeft />
           </div>

           <div className="text-center mt-4 text-slate-500 ">
              {review.text}
           </div>

           <div className="text-center text-violet-400 mx-auto mt-5">
            <FaQuoteRight />
           </div>

        </div>
    )
}
export default Card;