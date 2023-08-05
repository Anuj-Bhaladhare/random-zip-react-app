
import React, { useEffect, useState } from "react";
import Spinner from "./Spinner";

const Tag = () => {
  const [gifs, setGifs] = useState('');
  const [loader, setLoader] = useState(false);
  const [tag, setTag] = useState('');

  const API_KEY = "furZgPcPwGG7iZEQX5ApqEuayUzEqCAq";
  const url = "https://api.giphy.com/v1/gifs/random";

  const fetchData = async () => {
    setLoader(true);
    try {
      const getData = await fetch(`${url}?api_key=${API_KEY}&tag=${tag}`);
      const { data } = await getData.json();
      const imageSource = data.images.downsized.url;
      setGifs(imageSource);
      console.log(imageSource);
    } catch (err) {
      console.log(err);
    }
    setLoader(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  const searchHandler = () => {
    fetchData();
  }

  return (
    <div className="h-[24rem] bg-blue-400 mt-10 flex justify-center items-center gap-2 border border-black rounded-md p-1 flex-col">
      <h2 className="font-bold underline">Search Random Gifs</h2>
      <div className="h-[18rem] flex justify-center items-center">
        {loader ? (<Spinner />) : (<img src={gifs} className="h-[18rem]" alt="Random Gif" />)}
      </div>
      <div className="flex gap-5">
        <input 
          type="text"
          onChange={(event) => setTag(event.target.value)}
          value={tag}
          className="H-[1.2rem] w-[20rem] p-2 rounded-md border border-black"
        />
        <button className="bg-green-400 text-white font-bold p-1 pl-3 pr-3 rounded-md" onClick={searchHandler}>Search</button>
      </div>
    </div>
  )
}

export default Tag;
