import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const AllBeersPage = () => {
  const [beers, setBeers] = useState([]);

  const fetchAllBeers = async () => {
    try {
      const { data } = await axios.get("https://ih-beers-api2.herokuapp.com/beers");
      // console.log(data);
      setBeers(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAllBeers();
  }, []);

  console.log("GOOD", beers);

  return (
    <>
      {beers.map((oneBeer) => {
        return (
          <div key={oneBeer._id}>
            <Link to={`/beers/${oneBeer._id}`}>
              <img src={oneBeer.image_url} alt={oneBeer.name} style={{ height: "100px" }} />
              <h2>{oneBeer.name}</h2>
              <p>{oneBeer.tagline}</p>
              <p>Contributed By: {oneBeer.contributed_by}</p>
            </Link>
          </div>
        );
      })}
    </>
  );
};

export default AllBeersPage;
