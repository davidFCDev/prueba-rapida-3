import React, { useEffect, useState } from "react";

const CAT_FACT_ENDPOINT_URL = "https://catfact.ninja/fact";
const CAT_IMG_URL = "https://cataas.com/cat/says/hello";

function App() {
  const [fact, setFact] = useState("");

  const getRandomFact = () => {
    fetch(CAT_FACT_ENDPOINT_URL)
      .then((res) => res.json())
      .then((response) => {
        const { fact } = response;
        setFact(fact);
      });
  };

  const handleClick = () => {
    getRandomFact();
  };

  useEffect(() => {
    getRandomFact();
  }, []);

  return (
    <div>
      <h1>App de gatos</h1>
      <button onClick={handleClick}>New fact</button>
      {fact && <p>{fact}</p>}
    </div>
  );
}

export default App;
