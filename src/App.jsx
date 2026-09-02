
import './App.css';
import reviews from './data';
import Testimonial from './components/Testimonial';

function App() {

  return(
    
    <div clasName="flex flex-col w-[100vw] h-[100vh] justify-center items-center bg-gray-200">

       <div className="text-center">
          <h1 className='text-4xl font-bold'>Our Testimonials</h1>
       </div>

       <div className="bg-violet-400 h-[1px] w-[1/5]  ">

       </div>

       <Testimonial reviews={reviews} />

    </div>
  )
}

export default App;