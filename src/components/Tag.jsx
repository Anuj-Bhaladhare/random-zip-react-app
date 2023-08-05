
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
    <div>
      <h2>Search Random Gifs</h2>
      <div>
        {loader ? (<Spinner />) : (<img src={gifs} alt="Random Gif" />)}
      </div>
      <input
        type="text"
        onChange={(event) => setTag(event.target.value)}
        value={tag}
      />
      <button onClick={searchHandler}>Search</button>
    </div>
  )
}

export default Tag;
