import * as types from '../constants/ActionTypes';
import helper from '../services/helper';
import { push } from 'react-router-redux';
import { reset } from 'redux-form';
import axios from 'axios'; //http request library

// UI Actions
export const popupClose = () => {
  return {
    type: types.POPUP_CLOSE
  };
};

export const popupOpen = (content, keyword = 'general') => {
  return {
    type: types.POPUP_OPEN,
    payload: {
      content: content,
      //content, (possible airbnb style)
      type: keyword
    }
  };
};

//Button Actions

// export function fetchData(data) {
//   return dispatch => {
//     dispatch(requestData(data))
//     axios.get('/apiData').then((response)=>{
//       console.log(response);
//     });
//   }
// }
