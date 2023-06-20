import React, { useState } from "react";

// **IMPORTANT NOTES AT BOTTOM OF PAGE**

// We pass the image, description and location props in from the ListingsContainer so the ListingCard has access to the data.
function ListingCard({image, description, location, deleteListing, listID}) {

  // use useState to toggle the favorite button
  // variable = favorite, function = setFavorite
  // state is initially set to false because we don't want any of the    listings to be favorited when the page loads.
  const [favorite, setFavorite] = useState(false)
  
  // function toggles the state of favorite.
  const handleFavorite = () => {
    setFavorite(!favorite)
  }

  // create a function to handle the deleteListing function. We need to make a new function because onClick needs a callback function, not an invoked function. (deleteListing(listID))
  // pass in listID as a parameter to the deleteListing function so that we delete the listing we click on.
  const handleDelete = () => {
    deleteListing(listID)
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        {/* Passing in image prop as the img src value */}
        <img src={image} alt={"description"} />
      </div>
      <div className="details">
        {/* set the boolean (typically true or false) to the favorite variable which is initially set to false, but will change when the button is clicked*/}
        {favorite ? (
          // pass in the toggle handleFavorite function on click
          <button className="emoji-button favorite active" onClick={handleFavorite}>★</button>
        ) : (
          // pass in the toggle handleFavorite function on click
          <button className="emoji-button favorite" onClick={handleFavorite} >☆</button>
        )}
        {/* Passing in description prop as the <strong> description value */}
        <strong>{description}</strong>
        {/* Passing in description prop as the <span> location value */}
        <span> · {location}</span>
        {/* Pass in the handleDelete function as the result of an onClick event */}
        <button className="emoji-button delete" onClick={handleDelete}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;

// You can put two separate functions for the toggle because if the request is taking too long to load, and the user presses the favorite button more than once, we don't want it to keep toggling between true and false while the request is loading, we want the state to stay the same until the request loads.

// You should also disable the button until the state changes so the user can't keep pressing the button while the request is loading so the don't cause any weird errors.

  // const handleFavorite = () =>{
  //   setFavorite(true)
  // }
  // const handleUnFavorite = () =>
  //   setFavorite(false)

// This button will use the handleUnFavorite function because if the star is filled, that means the ListingCard is already favorited so we want to unfavorite it when we click the filled star
  // <button className="emoji-button favorite active" onClick={handleUnFavorite}>★</button>
// This button will use the handleFavorite function because if the star is not filled, that means the ListingCard is already unfavorited so we want to favorite it when we click the unfilled star
  // <button className="emoji-button favorite" onClick={handleFavorite} >☆</button>
