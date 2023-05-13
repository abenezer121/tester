import React, { useState } from "react";

import { geocoding } from "../../data/index";
// import { setUser } from "../../redux/reducers/user";
import { useSelector } from "react-redux";
export default function Geocoding() {
  const [searchText, setSearchText] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [onSearch, setOnSearch] = useState(false);
  const handleSearchText = (event) => {
    setSearchText(event.target.value);
  };
  const { userData } = useSelector((state) => state.user);
  function callSearch() {
    try {
      setOnSearch(!onSearch);
      geocoding(searchText, userData.token)
        .then((data) => {
          let _searchResult = [];
          data.data.map((n, index) => {
            if (index < 10) {
              _searchResult.push(<p>{n.name}</p>);
            }
            return null
          });
          return _searchResult;
        })
        .then((_searchResult) => {
          if (_searchResult.length === 0) {
            _searchResult.push(<p>No result</p>);
          }
          setSearchResult(_searchResult);
          setOnSearch(!onSearch);
        });
    } catch (err) {
      setOnSearch(!onSearch);
    }
  }

  return (
    <div>
      <div class="flex ">
        <div class=" flex ">
          <input
            type="search"
            onChange={handleSearchText}
            class="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300  transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="button-addon2"
          />

          <button
            onClick={() => callSearch()}
            type="button"
            id="button-addon2"
            className="bg-secondary text-black border-secondary px-[3%]"
          >
            {" "}
            Search
          </button>
        </div>
      </div>
      <div>
        {searchResult.map((n) => {
          return n;
        })}
      </div>
    </div>
  );
}
