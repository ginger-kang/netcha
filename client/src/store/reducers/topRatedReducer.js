import { GET_TOP_RATED_MOVIES } from '../actions/index';

export default function (state = [], action) {
    switch (action.type){
        case GET_TOP_RATED_MOVIES:
            return {
                ...state,
                movies: action.data
            }
        default:
            return state;
    }
}