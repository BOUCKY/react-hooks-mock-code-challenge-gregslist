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

  // create a function to delete a listing.
  // define a parameter listiID because we want the ID of the listing
  const deleteListing = (listID) => {
    console.log(listID)
    // use setListings to get the current state. Define a callback function with the parameter 'currentListings' because we are targeting the current listings. We use a callback function because we need to know what's currently in the state
    setListings((currentListings) => currentListings.filter((listing) => listing.id !== listID) )
    // filter through the currentListings, define a callback function with a parameter of 'listing'. If the listing ID is NOT equal to the ID of the listing we are trying to delete, include it in the new array. If the listing ID DOES match the ID of the listing we're trying to delete, don't include it in the new array
  }

  // map through the data, give each ListingCard a value for key, image, description, and location based on each object in the data.
  const renderListings = listings.map((dataObject) => 
    <ListingCard
    // passing these values as props. Left side of = is the prop. the right side of the = is the value of said prop.
    key={dataObject.id}
    image={dataObject.image}
    description={dataObject.description}
    location={dataObject.location}
    // pass the listID parameter and the deleteListing function as props to the ListingCard
    listID={dataObject.id}
    deleteListing={deleteListing}
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
