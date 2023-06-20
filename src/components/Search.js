import React, { useState } from "react";

// setSearch so that when we submit search form, we change that original state defined in App.js
function Search({setSearch}) {
  // this new state is so we can controll the user input
  const [partialSearch, setPartialSearch] = useState('')

  function handleSubmit(e) {
    e.preventDefault();
    // set the original state to the current state of the input value
    setSearch(partialSearch)
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        // value set to whatever state we're trying to change
        value={partialSearch}
        // updating the partialSearch state to the target value
        // when we type something in input, the event target value = initial state + the letter we just typed. Initial value is updated with every leter user types
        onChange={(e) => setPartialSearch(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
