import React from "react";
import Hero from "../component/Hero";
import JobListings from "../component/Joblisting";
import ViewAllJobs from "../component/ViewAllJobs";
import HomeCards from "../component/HomeCards";


const HomePage = () => {
  return (
    <div>
      
    

     

      <Hero />
      <HomeCards/>
      <JobListings isHome= {true}/>
      <ViewAllJobs/>
      
      
    </div>
  );
};

export default HomePage;