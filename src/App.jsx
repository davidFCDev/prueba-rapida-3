import React from "react";
import { useCatFact } from "./hooks/useCatFact";

const CAT_IMG_URL = "https://cataas.com/cat/says/hello";

function App() {
  const { fact, refreshFact } = useCatFact();

  const handleClick = () => {
    refreshFact();
  };

  return (
    <div>
      <h1>App de gatos</h1>
      <button onClick={handleClick}>New fact</button>
      {fact && <p>{fact}</p>}
    </div>
  );
}

export default App;
