import React from "react";
import { AppContext } from "./context/ContextApi";

const App = () => {
  return (
    <AppContext>
      <div className="text-3xl">App</div>
    </AppContext>
  );
};

export default App;
