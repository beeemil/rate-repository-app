import useRepositories from '../../hooks/useRepositories';
import RepositoryList from './RepositoryList';

const RepositoryListGetter = ({ selectedSort }) => {
  const { repositories, loading, fetchMore } = useRepositories({
    first: 2,
    ...selectedSort
  });
  const onEndReach = () => {
    console.log('end');
    fetchMore();
  };
  if (!loading) {
  const repositoryNodes = repositories.edges.map(edge => edge.node) || [];
  
    return (
      <RepositoryList repositoryNodes={repositoryNodes} onEndReach={onEndReach}/>
    );
  }
};
export default RepositoryListGetter;