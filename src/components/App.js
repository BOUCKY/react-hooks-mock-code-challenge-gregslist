import React, {useState} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  // on the submit of the search form, we update this state
  const [search, setSearch] = useState('')

  return (
    <div className="app">
      {/* pass in the setSearch state as props to header */}
      <Header setSearch={setSearch}/>
      {/* pass the search prop to ListingsContainer so it goes from App -> Header -> Search -> Header -> App -> ListingsContainer -> ListingCard */}
      <ListingsContainer search={search} />
    </div>
  );
}

export default App;
