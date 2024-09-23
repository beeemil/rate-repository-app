
import { useState } from 'react';
import { View } from 'react-native';
import RepositoryListHeader from './RepositoryListHeader';
import RepositoryListGetter from './RepositoryListGetter';


const RepositoryListContainer = () => {
  const [ selectedSort, setSelectedSort ] = useState({ orderBy: 'CREATED_AT', orderDirection: 'DESC', searchKeyword: '' });
  return (
    <View>
      <RepositoryListHeader selectedSort={selectedSort} setSelectedSort={setSelectedSort}/>
      <RepositoryListGetter selectedSort={selectedSort} />
    </View>
  );
};

export default RepositoryListContainer;