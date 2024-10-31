
import { NavLink } from 'react-router-dom'
import dlt from '../assets/dlt_bg.png'

const NavBar = () => {



    const linkClass = ({isActive}) =>

        isActive? "bg-black text-white hover:bg-gray-900 hover:text-white rounded_md px-3 py-2"
        : "text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"

  return (
    // <nav className='text-white bg-blue-500  px-5  text-3xl flex gap-x-50 content-center justify-between  py-5'>
      
    //   <div className='mr-10 bg-slate-500 rounded-lg p-3 animate-bounce font-semibold'>Home</div>

    //   <div className='flex gap-10'>

    //   <p className='hover:bg-slate-500 rounded-lg p-2'>user</p>

    //   <p className='hover:bg-slate-600 rounded-lg p-2 '>contact</p>

    //   <p className='hover:bg-slate-500 rounded-lg p-2 '>about </p>

    //   </div>
      

    // </nav>

   

   
    <nav className='bg-indigo-700 border-b border-indigo-500'>

     <div className='mx-auto max-w-7xl px-2 sm:px-6 py-2'>

        <div className='flex h-20 items-center justify-between'>

            <div className='flex flex-1 items-center justify-center md:items-stretch md:justify-start'>

                <NavLink className="flex white flex-shrink-0 items-center mr-4" to="/">
                
                
                <img className="h-10 w-auto" src={dlt} alt="dlt bg" />
                
                </NavLink>

                <div className='md:ml-auto'>

                    <div className='flex space-x-8'>

                    <NavLink to="/" className={linkClass}>
                      Home
                    </NavLink>

                    <NavLink to="/jobs" className={linkClass}>
                     Jobs
                    </NavLink>

                    <NavLink to="/add-job" className={linkClass}>
                      Add Job
                    </NavLink>

                    </div>
                    
                </div>

                
            </div>
        </div>
     </div>

    </nav>
  
  
  )

}
export default NavBar