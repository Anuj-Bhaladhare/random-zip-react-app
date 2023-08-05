import React, { useState } from "react";
import { useEffect } from "react";

const Random = () => {

  // const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
  const API_KEY = "furZgPcPwGG7iZEQX5ApqEuayUzEqCAq";
  const url = "https://api.giphy.com/v1/gifs/random";

  const[gifs, getGifs] = useState();

  const fetchData = async() => {
    try{
      let getData = await fetch(`${url}?api_key=${API_KEY}`);
      let outpute = await getData.json();
      console.log(outpute);
    }
    catch(err) {
       console.log(err);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);


  const randomGifsHandaler = () => {
      
  }

  return (
    <div className="w-[45rem] rounded-md border border-black flex flex-col items-center bg-green-400 h-[20rem] mt-5 p-1">
      <h3 className="font-bold underline">A Random Gif</h3>

      <img src={gifs}/>

      <button onClick={randomGifsHandaler} className="bg-white font-bold rounded-md p-1 pl-[15rem] pr-[15rem] opacity-50">
        Generate
      </button>
    </div>
  );
};
export default Random;
