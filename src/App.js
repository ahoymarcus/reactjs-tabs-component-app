import React, { useState, useEffect } from 'react'

import { FaAngleDoubleRight } from 'react-icons/fa'


// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project'



function App() {
  const [ loading, setloading ] = useState(true);
  const [ jobs, setJobs ] = useState([]);
  const [ value, setValue ] = useState(0);



  const renderComponents = () => {
    if (loading) {
      return (
        <section className="section loading">
          <h1>loading...</h1>
        </section>
      );
    } else {
      const { company, dates, duties, title } = jobs[value];

      return (
        <p>{company}</p>
      );
    }
  };


  const fetchJobs = async () => {
    const response = await fetch(url);
    const newJobs = await response.json();

    console.log(newJobs);
    setJobs(newJobs);
    setloading(false);
  };

  useEffect(() => {
    fetchJobs();
  }, []);


  return (
    <main>
      {renderComponents()}
    </main>
  );
}; 



export default App


