import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddBeerPage = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [firstBrewed, setFirstBrewed] = useState("");
  const [tips, setTips] = useState("");
  const [level, setLevel] = useState(0);
  const [contributed, setContributed] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("https://ih-beers-api2.herokuapp.com/beers/new", {
        name,
        image_url: image,
        tagline,
        description,
        first_brewed: firstBrewed,
        brewers_tips: tips,
        attenuation_level: level,
        contributed_by: contributed,
      });
      console.log(response.data);
      if (response.status === 200) {
        navigate(`/beers`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={name}
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
        </label>
        <label>
          Image:
          <input
            type="text"
            name="image"
            value={image}
            onChange={(event) => {
              setImage(event.target.value);
            }}
          />
        </label>
        <label>
          Tagline:
          <input
            type="text"
            name="tagline"
            value={tagline}
            onChange={(event) => {
              setTagline(event.target.value);
            }}
          />
        </label>
        <label>
          Description:
          <textarea
            defaultValue={description}
            cols="30"
            rows="10"
            name="description"
            onChange={(event) => {
              setDescription(event.target.value);
            }}
          ></textarea>
        </label>
        <label>
          First Brewed:
          <input
            type="text"
            name="first_brewed"
            value={firstBrewed}
            onChange={(event) => {
              setFirstBrewed(event.target.value);
            }}
          />
        </label>
        <label>
          Brewerss Tips:
          <input
            type="text"
            name="brewers_tips"
            value={tips}
            onChange={(event) => {
              setTips(event.target.value);
            }}
          />
        </label>
        <label>
          Attenuation Level:
          <input
            type="number"
            name="attenuation_level"
            value={level}
            onChange={(event) => {
              setLevel(event.target.value);
            }}
          />
        </label>
        <label>
          Contributed By:
          <input
            type="text"
            name="contributed_by"
            value={contributed}
            onChange={(event) => {
              setContributed(event.target.value);
            }}
          />
        </label>
        <button type="submit">Add Beer</button>
      </form>
    </>
  );
};

export default AddBeerPage;
