import React, { useState } from "react";
import { useEffect } from "react";
import Spinner from "./Spinner";

const Random = () => {

  // const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
  const API_KEY = "furZgPcPwGG7iZEQX5ApqEuayUzEqCAq";
  const url = "https://api.giphy.com/v1/gifs/random";

  const[gifs, getGifs] = useState();
  const[loader, setLoader] = useState(false);

  const fetchData = async() => {
    setLoader(true);
    try{
      const getData = await fetch(`${url}?api_key=${API_KEY}`);
      const {data} = await getData.json();
      getGifs(data.images.downsized.url);
    }
    catch(err) {
       console.log(err);
    }
    setLoader(false)
  }

  useEffect(() => {
    fetchData();
  }, []);


  const randomGifsHandaler = () => {
    fetchData();
  }

  return (
    <div className="w-[45rem] h-[24rem] rounded-md border border-black flex flex-col items-center bg-green-400 mt-5 p-1">
      <h3 className="font-bold underline">A Random Gif</h3>
      
      <div className="h-[18rem] flex justify-center items-center">
        {
          loader ? ( < Spinner />) : (<img src={gifs} className="h-[18rem]"/>)
        }
      </div>

      <button onClick={randomGifsHandaler} className="bg-white font-bold rounded-md p-1 pl-[15rem] pr-[15rem] mt-2 opacity-50">
        Generate
      </button>
    </div>
  );
};
export default Random;
