import React, { useState } from "react";

function SearchUser(props) {
  const [search, setSearch] = useState("");

  async function getUser() {
    const getFetch = await fetch(
      "https://instagramlovecalculator.onrender.com/getInfo/" + search
    );

    if (getFetch.status != "404") {
      const json = await getFetch.json();

      props.setUser(json);

      props.setFound(true);
      props.setFoundOut(true);
      props.setDisplay(false);
    } else {
      setSearch("Not found :c");
    }
  }

  return (
    <div
      className="searchUser"
      style={{ display: props.display == true ? "block" : "none" }}
    >
      <div className="searchContainer">
        <div className="inside">
          <div
            className="head"
            style={{
              display: "flex",
              justifyContent: "space-between",
              margin: "0em 0.5em",
            }}
          >
            <h2 style={{ width: "100%" }}>Search user</h2>
            <h2
              onClick={(e) => {
                props.setDisplay(false);
              }}
            >
              X
            </h2>
          </div>
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
