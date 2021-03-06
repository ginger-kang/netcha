import { GET_POPULAR_MOVIES } from '../actions/index';

export default function (state = [], action) {
  switch (action.type) {
      case GET_POPULAR_MOVIES:
          return {
            ...state,
            movies: action.data
          } 
      default:
          return state;
  }
}