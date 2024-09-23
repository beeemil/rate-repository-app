import { render, screen, within } from "@testing-library/react-native";
import RepositoryList from "../../components/RepositoryListContainer/RepositoryList";

describe('RepositoryList', () => {
  describe('RepositoryListContainer', () => {
    it('renders repository information correctly', () => {
      const repositories = {
        totalCount: 8,
        pageInfo: {
          hasNextPage: true,
          endCursor:
            'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
          startCursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
        },
        edges: [
          {
            node: {
              id: 'jaredpalmer.formik',
              fullName: 'jaredpalmer/formik',
              description: 'Build forms in React, without the tears',
              language: 'TypeScript',
              forksCount: 1619,
              stargazersCount: 21856,
              ratingAverage: 88,
              reviewCount: 3,
              ownerAvatarUrl:
                'https://avatars2.githubusercontent.com/u/4060187?v=4',
            },
            cursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
          },
          {
            node: {
              id: 'async-library.react-async',
              fullName: 'async-library/react-async',
              description: 'Flexible promise-based React data loader',
              language: 'JavaScript',
              forksCount: 69,
              stargazersCount: 1760,
              ratingAverage: 72,
              reviewCount: 3,
              ownerAvatarUrl:
                'https://avatars1.githubusercontent.com/u/54310907?v=4',
            },
            cursor:
              'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
          },
        ],
      };
      render(<RepositoryList repositories={repositories}/>);
      const repositoryItems = screen.getAllByTestId("repositoryItem");
      const [firstRepositoryItem, secondRepositoryItem] = repositoryItems;

      const firstRepo = within(firstRepositoryItem);
      
      expect(firstRepo.getByTestId('fullName')).toHaveTextContent('jaredpalmer/formik');
      expect(firstRepo.getByTestId('description')).toHaveTextContent('Build forms in React, without the tears');
      expect(firstRepo.getByTestId('language')).toHaveTextContent('TypeScript');
      expect(firstRepo.getByTestId('starCount')).toHaveTextContent('21.9k');  // 21856 stars formatted as '21.9k'
      expect(firstRepo.getByTestId('forkCount')).toHaveTextContent('1.6k');   // 1619 forks formatted as '1.6k'
      expect(firstRepo.getByTestId('reviewCount')).toHaveTextContent('3');    // Review count is 3
      expect(firstRepo.getByTestId('ratingAverage')).toHaveTextContent('88'); // Rating average is 88
  
      // Second repository assertions
      const secondRepo = within(secondRepositoryItem);
      
      expect(secondRepo.getByTestId('fullName')).toHaveTextContent('async-library/react-async');
      expect(secondRepo.getByTestId('description')).toHaveTextContent('Flexible promise-based React data loader');
      expect(secondRepo.getByTestId('language')).toHaveTextContent('JavaScript');
      expect(secondRepo.getByTestId('starCount')).toHaveTextContent('1.8k');  // 1760 stars formatted as '1.8k'
      expect(secondRepo.getByTestId('forkCount')).toHaveTextContent('69');    // Fork count is 69 (no formatting needed)
      expect(secondRepo.getByTestId('reviewCount')).toHaveTextContent('3');   // Review count is 3
      expect(secondRepo.getByTestId('ratingAverage')).toHaveTextContent('72'); // Rating average is 72
    });
  });
});