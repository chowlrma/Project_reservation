import React, { useState } from "react";

const SearchBar = (props) => {
  const products = props.searchItems;
  // console.log(global);
  const [searchValue, setSearchValue] = useState("");
  const handleInputChange = (event) => {
    // console.log(event.target.value);
    setSearchValue(event.target.value);
  };

  const shouldDisplayButton = searchValue.length > 0;

  const handleInputClear = () => {
    setSearchValue("");
  };
  // products.map((product) => {
  //     console.log(product);
  // });
  const filteredProducts = products.filter((product) => {
    return product.includes(searchValue);
  });

  return (
    <div className="searchBar">
      <input
        type="text"
        value={searchValue}
        placeholder="검색"
        onChange={handleInputChange}
      />
      {shouldDisplayButton && <button onClick={handleInputClear}>검색</button>}
      <ul>
        {filteredProducts.map((product) => {
          return <li key={product}>{product}</li>;
        })}
      </ul>
    </div>
  );
};
export default SearchBar;
