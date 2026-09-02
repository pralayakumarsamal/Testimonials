import React, { useState } from "react";
import Card from "./Card";
import { FiChevronLeft,FiChevronRight } from 'react-icons/fi';


function Testimonial(props) {

    let reviews = props.reviews;
    const [index, setindex] = useState(0);

   function leftShiftHandler() {
       if(index-1<0) {
           setindex(reviews.length-1);
       }
       else{
              setindex(index-1);
       }
   }

    function rightShiftHandler() {
        if(index+1 >= reviews.length) {
            setindex(0);
        }
        else {
            setindex(index+1);
        }
    }

    function supriseHandler() {

        let randomIndex = Math.floor(Math.random() * reviews.length);
        setindex(randomIndex);
    }

    return(

        <div className="w-[85vw] md:w-[700px] bg-white flex flex-col  justify-center items-center 
        mt-10 p-10 transition-all duration-700 shaddow-md">
             <Card review={reviews[index]} 
                
             />
             <div className="flex flex-row justify-center items-center mt-5">
            
             <button 
             onClick={leftShiftHandler}
             className="mr-5 cursor-pointer hover:text-violet-500">
                <FiChevronLeft />
             </button>
             <button 
             onClick={rightShiftHandler}
             className="mr-5 cursor-pointer hover:text-violet-500" >
                <FiChevronRight />
             </button>
             
           </div>

             <div className="flex flex-row justify-center items-center mt-5">
                <button 
                onClick={supriseHandler}
                 className="bg-violet-400 hover:bg-violet-500 transition-all duration-200
             cursor-pointer text-white px-10 py-2 rounded-md font-bold">
                    Suprise Me
                </button>
             </div>
        </div>
    )
}
export default Testimonial;