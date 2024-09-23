import { Picker } from '@react-native-picker/picker';

const SortingSelector = ({ selectedSort, setSelectedSort }) => {
  const handleValueChange = (itemValue) => {
    const [orderBy, orderDirection] = itemValue.split(':');
    setSelectedSort({
      ...selectedSort,
      orderBy: orderBy,
      orderDirection: orderDirection
    });
  };
  return (
    <Picker
      selectedValue={`${selectedSort.orderBy}:${selectedSort.orderDirection}`}
      onValueChange={handleValueChange}>
      <Picker.Item label="Latest repositories" value="CREATED_AT:DESC" />
      <Picker.Item label="Highest rated repositories" value="RATING_AVERAGE:DESC" />
      <Picker.Item label="Lowest rated repositories" value="RATING_AVERAGE:ASC" />
    </Picker>
  );
};

export default SortingSelector;