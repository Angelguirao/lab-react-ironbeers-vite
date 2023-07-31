import axios from "axios";
import { useEffect, useState } from "react";

const RandomBeerPage = () => {
  const [random, setRandom] = useState(null);

  const fetchRandom = async () => {
    try {
      const { data, status } = await axios.get("https://ih-beers-api2.herokuapp.com/beers/random");
      if (status === 200) {
        setRandom(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchRandom();
  }, []);
  console.log(random);

  if (random === null) {
    return <h1>Is Loading...</h1>;
  }

  return (
    <>
      <h1>{random.name}</h1>
    </>
  );
};

export default RandomBeerPage;
