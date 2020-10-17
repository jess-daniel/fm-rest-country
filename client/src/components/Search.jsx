import React, { useContext } from "react";
import themeContext from "../contexts/themeContext";
import OptionInput from "../components/OptionInput";
import SearchInput from "./SearchInput";

const Search = () => {
  const { theme } = useContext(themeContext);

  return (
    <section
      className="flex items-center justify-around pt-16 mt-0 mx-auto"
      id={theme ? "dark-search" : null}
    >
      <SearchInput />
      <OptionInput />
    </section>
  );
};

export default Search;
