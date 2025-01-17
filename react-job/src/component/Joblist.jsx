import {useState} from "react";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";


const Joblist = ({job}) => {

    const [showFullDescription, setShowFullDescrtiption] = useState(false);

    let description = job.description;

    if(!showFullDescription){
        description = description.substring(0,90) + '....'
    }


  return (
    
    <div className='bg-white rounded-xl shadow-md relative'>

    <div className='p-4'>

     <div className='mb-6'>

         <div className='text-gray-600 my-2'> {job.type}</div>

         <h3 className='text-xl font-bold'>

             {job.title}
         </h3>
     </div>

     <div className='md-5'>{description}</div>

     <button onClick={() => setShowFullDescrtiption((prevState) => !prevState)} className="text-indigo-500 mb-5 hover:text-indigo-600">

        {showFullDescription ? 'less' : 'more'}

     </button>

     <h3 className='text-indigo-500 md-5'> {job.salary}</h3>

     <div className='border border-gray-100 md-5'>

         <div className='flex flex-col lg:flex-row justify-between items-center px-2 py-2 p-2'>

             <div className='text-orange-700 flex items-center '>

             <FaLocationDot />

                 {job.location}
             </div>

             <Link
             to={`/jobs/${job.id}`} className='h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-2 py-2 rounded-lg text-center text-sm'>
                 Read More
             </Link>

         </div>
     </div>
    </div>
 </div>

  )
}

export default Joblist