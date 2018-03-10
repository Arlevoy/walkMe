import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import TourDetailsScreen from './TourDetailsScreen.component';

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

const TourDetailsScreenContainer = graphql(TourDescriptionQuery)(TourDetailsScreen);

export default TourDetailsScreenContainer;
