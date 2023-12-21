import React, { useState } from 'react';
import List from './components/List';
import data from "./helper/data.js"

function App() {

  const [first, setFirst] = useState(1);
  const [last, setLast] = useState(5);

  const handleNext = () => {
    setFirst((first + 4) % 20 + 1);
    setLast((last + 4) % 20 + 1);
  }

  const handlePrev = () => {
    setFirst((first + 14) % 20 + 1);
    setLast((last + 14) % 20 + 1);
  }
 
  return (
    <main>
      <section className="container">
        <h3>Employee List</h3>
        <h5>(Employees {first} to {last})</h5>
            {Array.from(data).filter((e,i)=> first<=i+1 && i+1<=last).map((employee, i) => (<List {...employee} key={i}/>))}
        <div className='btns'>
          <button onClick={handlePrev}>Prev</button>
          <button onClick={handleNext}>Next</button>
        </div>
      </section>
    </main>
  );
}

export default App;
