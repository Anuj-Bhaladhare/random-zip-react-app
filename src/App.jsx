import React from "react";
import Random from "./components/Random";
import Tag from "./components/Tag";
 
const App = () => {
 return (
     <div className="background h-full flex items-center flex-col w-full">
        <h1 className="bg-white font-bold pl-[38%] text-[2rem] pr-[38%] mt-5 rounded-md">RANDOM GIPS</h1>
        <div className="p-10">
          <Random />
          <Tag />
        </div>
     </div>
 )
}
export default App;
