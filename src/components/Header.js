import React from "react";
import Search from "./Search";

function Header({setSearch}) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      {/* pass in setSearch state as props to search from app */}
      <Search setSearch={setSearch}/>
    </header>
  );
}

export default Header;
