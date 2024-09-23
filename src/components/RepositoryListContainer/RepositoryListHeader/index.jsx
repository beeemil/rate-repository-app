import { View } from "react-native";
import SearchRepository from "./SearchRepository";
import SortingSelector from "./SortingSelector";
import React from "react";

const RepositoryListHeader = ({ selectedSort, setSelectedSort }) => {
  return (
    <View>
      <SortingSelector selectedSort={selectedSort} setSelectedSort={setSelectedSort} />
      <SearchRepository selectedSort={selectedSort} setSelectedSort={setSelectedSort} />
    </View>
  );
};

export default RepositoryListHeader;