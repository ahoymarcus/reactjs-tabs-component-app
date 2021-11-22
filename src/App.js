import React, { useState, useEffect } from 'react'

import { FaAngleDoubleRight } from 'react-icons/fa'


// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project'



function App() {
  const [ loading, setloading ] = useState(true);


  const renderComponents = () => {
    if (loading) {
      return (
        <section className="section loading">
          <h1>loading...</h1>
        </section>
      );
    }
  };

  return (
    <main>
      {renderComponents()}
    </main>
  );
};



export default App


