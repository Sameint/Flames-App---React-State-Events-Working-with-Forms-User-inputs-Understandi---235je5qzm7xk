import React, { useState } from "react";
import "../styles/App.css";

const App = () => {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [relationshipStatus, setRelationshipStatus] = useState("");

  const calculateRelationship = () => {
    if (input1 === "" || input2 === "") {
      setRelationshipStatus("Please enter valid input");
      return;
    }

    const string1 = input1.toLowerCase();
    const string2 = input2.toLowerCase();

    let remaining1 = "";
    let remaining2 = "";

    for (let i = 0; i < string1.length; i++) {
      if (!string2.includes(string1[i])) {
        remaining1 += string1[i];
      }
    }

    for (let i = 0; i < string2.length; i++) {
      if (!string1.includes(string2[i])) {
        remaining2 += string2[i];
      }
    }

    const sumLength = (remaining1.length + remaining2.length) % 6;

    switch (sumLength) {
      case 1:
        setRelationshipStatus("Friends");
        break;
      case 2:
        setRelationshipStatus("Love");
        break;
      case 3:
        setRelationshipStatus("Affection");
        break;
      case 4:
        setRelationshipStatus("Marriage");
        break;
      case 5:
        setRelationshipStatus("Enemy");
        break;
      case 0:
        setRelationshipStatus("Siblings");
        break;
      default:
        setRelationshipStatus("Please enter valid input");
        break;
    }
  };

  const clearInputs = () => {
    setInput1("");
    setInput2("");
    setRelationshipStatus("");
  };

  return (
    <div id="main">
      <div className="container">
        <h1 className="header">FLAMES</h1>
        <div className="input-container">
          <label htmlFor="input1">First Name:</label>
          <input
            type="text"
            id="input1"
            data-testid="input1"
            value={input1}
            onChange={(e) => setInput1(e.target.value)}
          />
        </div>
        <div className="input-container">
          <label htmlFor="input2">Second Name:</label>
          <input
            type="text"
            id="input2"
            data-testid="input2"
            value={input2}
            onChange={(e) => setInput2(e.target.value)}
          />
        </div>
        <div className="button-container">
          <button
            data-testid="calculate_relationship"
            onClick={calculateRelationship}
          >
            Calculate Relationship Future
          </button>
          <button data-testid="clear" onClick={clearInputs}>
            Clear
          </button>
        </div>
        <div className="result-container">
          <h3 data-testid="answer">{relationshipStatus}</h3>
        </div>
      </div>
    </div>
  );
};

export default App;
