import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import HomeScreen from './HomeScreen.component';

const TourDescriptionQuery = gql`
  query {
    allTours {
      id
      name
      description
      image
    }
  }
`;

const HomeScreenContainer = graphql(TourDescriptionQuery)(HomeScreen);

export default HomeScreenContainer;
