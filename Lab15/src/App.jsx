import React, { useState } from "react";
import "./App.css";
import Q1 from "./Q1";
import Q2 from "./Q2";
import Q3 from "./Q3";
import Q4 from "./Q4";
import Q5 from "./Q5";
import Q6 from "./Q6";
import Q7 from "./Q7";
import Q8 from "./Q8";
import Q9 from "./Q9";
import Q10 from "./Q10";
import Q11 from "./Q11";
import Q12 from "./Q12";

function App() {
  const [showQ1, setShowQ1] = useState(false);
  const [showQ2, setShowQ2] = useState(false);
  const [showQ3, setShowQ3] = useState(false);
  const [showQ4, setShowQ4] = useState(false);
  const [showQ5, setShowQ5] = useState(false);
  const [showQ6, setShowQ6] = useState(false);
  const [showQ7, setShowQ7] = useState(false);
  const [showQ8, setShowQ8] = useState(false);
  const [showQ9, setShowQ9] = useState(false);
  const [showQ10, setShowQ10] = useState(false);
  const [showQ11, setShowQ11] = useState(false);
  const [showQ12, setShowQ12] = useState(false);

  return (
    <div className="App">
      <button onClick={() => setShowQ1(true)}>Question 1</button>
      {showQ1 && <Q1 />}
      <br></br>
      <button onClick={() => setShowQ2(true)}>Question 2</button>
      {showQ2 && <Q2 />}
      <br></br>
      <button onClick={() => setShowQ3(true)}>Question 3</button>
      {showQ3 && <Q3 />}
      <br></br>
      <button onClick={() => setShowQ4(true)}>Question 4</button>
      {showQ4 && <Q4 />}
      <br></br>
      <button onClick={() => setShowQ5(true)}>Question 5</button>
      {showQ5 && <Q5 />}
      <br></br>
      <button onClick={() => setShowQ6(true)}>Question 6</button>
      {showQ6 && <Q6 />}
      <br></br>
      <button onClick={() => setShowQ7(true)}>Question 7</button>
      {showQ7 && <Q7 />}
      <br></br>
      <button onClick={() => setShowQ8(true)}>Question 8</button>
      {showQ8 && <Q8 />}
      <br></br>
      <button onClick={() => setShowQ9(true)}>Question 9</button>
      {showQ9 && <Q9 />}
      <br></br>
      <button onClick={() => setShowQ10(true)}>Question 10</button>
      {showQ10 && <Q10 />}
      <br></br>
      <button onClick={() => setShowQ11(true)}>Question 11</button>
      {showQ11 && <Q11 />}
      <br></br>
      <button onClick={() => setShowQ12(true)}>Question 12</button>
      {showQ12 && <Q12 />}
    </div>
  );
}

export default App;
