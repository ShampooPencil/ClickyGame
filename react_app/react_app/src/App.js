//**** We will send the actually game in this App function. 
//*** Then, we send this app func to the index.js so we can show it to the user.
import React from "react";
import {Store} from "./components/storeChars";

function App() {
  return <Store />;
}

export default App;
