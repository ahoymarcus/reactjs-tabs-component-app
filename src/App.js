// https://www.youtube.com/watch?v=ly3m6mv5qvg
// 2 hr 05' 00 ''
import React, { useState, useEffect } from 'react'

import { FaAngleDoubleRight } from 'react-icons/fa'


// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project';



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
        <section className="section">
          <div className="title">
            <h2>experience</h2>
            <div className="underline"></div>
          </div>
          <div className="jobs-center">
            {/*btn container*/}
            <div className="btn-container">
              {
                jobs.map((item, index) => {
                  return (
                    <button
                     key={item.id} 
                     onClick={() => setValue(index)}
                    className={`job-btn ${index === value && 'active-btn'}`}
                    >
                      {item.company}
                    </button>
                  );
                })
              }
            </div>
            {/*job info */}
            <article className="job-info">
              <h3>{title}</h3>
              <h4>{company}</h4>
              <p className="job-date">{dates}</p>
              {duties.map((duty, index) => {
                return (
                  <div key={index} className="job-desc">
                    <FaAngleDoubleRight className="job-icon" />
                    <p>{duty}</p>
                  </div> 
                );
              })}
            </article>
          </div>
        </section>
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


