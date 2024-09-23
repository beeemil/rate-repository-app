import { Searchbar } from "react-native-paper";
import { useState, useEffect } from "react";
import { useDebounce } from "use-debounce";

const SearchRepository = ({ selectedSort, setSelectedSort }) => {
  const [searchKeyword, setSearchKeyword] = useState(selectedSort.searchKeyword || '');
  const [debouncedKeyword] = useDebounce(searchKeyword, 500);

  useEffect(() => {
    setSelectedSort((prevSort) => ({
      ...prevSort,
      searchKeyword: debouncedKeyword,
    }));
  }, [debouncedKeyword]);

  const handleValueChange = (value) => {
    setSearchKeyword(value);
  };

  return (
    <Searchbar
      placeholder="Search"
      onChangeText={handleValueChange}
      value={searchKeyword}
    />
  );
};

export default SearchRepository;
