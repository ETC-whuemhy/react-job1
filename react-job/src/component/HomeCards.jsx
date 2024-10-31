import Cards from "./Cards"
import { Link } from "react-router-dom"

const HomeCards = () => {
  return (


    <session className='py-4'>

      <div className="container-xl lg:container m-auto">

         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg ">

            <Cards>
                <h2 className="text-2xl font-bold">For Developer</h2>

                <p className="mt-2 mb-4">Browse our react job and start your career todday</p>

                <Link to="/#" className="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-600">
                  
                  Browse Job 
                </Link>
            </Cards>

            <Cards>
                <h2 className="text-2xl font-bold">For Employers</h2>

                <p className="mt-2 mb-4">list your job to find the perfect developer for the role</p>

                <Link to="/#" className="inline-block bg-indigo-900 text-white rounded-lg px-4 py-2 hover:bg-indigo-600">
                  
                  Add Job 
                </Link>
            </Cards>

         </div>

      </div>

    </session>
  )
}

export default HomeCards