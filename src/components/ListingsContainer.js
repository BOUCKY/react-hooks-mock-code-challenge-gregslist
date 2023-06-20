import React,{useState, useEffect} from "react";
import ListingCard from "./ListingCard";

function ListingsContainer() {

  const [listings, setListings] = useState([])

  useEffect(() => {
    fetch('http://localhost:6001/listings')
    // This is saying the response from the FETCH request = the json data
    .then((response) => response.json())
    // This is taking in what the response.json is returning as 'data'
    .then((data) => setListings(data))
    
  // useEffect needs an empty array as a second argument. Empty array = useEffect will only call the function when the page first loads.
  }, [])

  // map through the data, give each ListingCard a value for key, image, description, and location based on each object in the data.
  const renderListings = listings.map((dataObject) => 
    <ListingCard
    // passing these values as props. Left side of = is the prop. the right side of the = is the value of said prop.
    key={dataObject.id}
    image={dataObject.image}
    description={dataObject.description}
    location={dataObject.location}
    />
  )

  return (
    <main>
      <ul className="cards">
        {/* Rather than passing in <ListingCard />, we pass in the renderListings variable that contains the map and all of the props for <ListingCard /> */}
        {renderListings}
      </ul>
    </main>
  );
}

export default ListingsContainer;
