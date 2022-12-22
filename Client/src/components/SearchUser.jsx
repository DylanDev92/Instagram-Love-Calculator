import React, { useState } from "react";

function SearchUser(props) {
  const [search, setSearch] = useState("");

  async function getUser() {
    const getFetch = await fetch("http://localhost:3000/getInfo/" + search);

    if (getFetch.status != "404") {
      const json = await getFetch.json();

      props.setUser(json);

      props.setFound(true);
      props.setFoundOut(true);
      props.setDisplay(false);
    } else {
      setSearch('Not found :c');
    }
  }

  return (
    <div
      className="searchUser"
      style={{ display: props.display == true ? "block" : "none" }}
    >
      <div className="searchContainer">
        <div className="inside">
          <h2>Search user</h2>
          <input
            id="inputUser"
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onFocus={(e) => setSearch("")}
          />
          <h2
            id="CloseSearch"
            onClick={(e) => {
              getUser();
            }}
          >
            Search
          </h2>
        </div>
      </div>
    </div>
  );
}

export default SearchUser;
