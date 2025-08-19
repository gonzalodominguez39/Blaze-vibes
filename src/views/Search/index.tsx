import { useState } from "react";
import { SearchBar } from "../../components/common/NavBar/components/SearchBar";

export const Search = () => {
    const [query, setQuery] = useState<string>("");
  const handleSearch = (searchQuery: string) => {
    setQuery(searchQuery);
  };

  return <div>
    <SearchBar handleSearch={handleSearch} />
  </div>;
};
