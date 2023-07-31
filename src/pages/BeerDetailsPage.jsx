import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const BeerDetailsPage = () => {
  const [details, setDetails] = useState(null);
  const { beerId } = useParams();

  const fetchDetails = async () => {
    try {
      const response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`);
      if (response.status === 200) {
        setDetails(response.data);
      } else if (response.status === 500) {
        navigate("/beers");
      } else {
        console.log("API BROKEN");
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchDetails();
  }, [beerId]);
  // console.log(details);

  if (details === null) {
    return <h1>Is Loading...</h1>;
  }

  return (
    <>
      <div>
        <img src={details.image_url} alt={details.name} style={{ height: "100px" }} />
        <h2>{details.name}</h2>
        <p>{details.tagline}</p>
        <p>First brewed: {details.first_brewed}</p>
        <p>{details.description}</p>
      </div>
    </>
  );
};

export default BeerDetailsPage;
