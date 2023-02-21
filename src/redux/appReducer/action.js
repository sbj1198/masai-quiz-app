import * as types from "./actionTypes";
import axios from "axios";

export const getQuizQuestions =
  ({ category, difficulty_level, number_of_ques }) =>
  (dispatch) => {
    let cat;
    if (category === "gk") {
      cat = 9;
    } else if (category === "geography") {
      cat = 22;
    } else {
      cat = 21;
    }
    dispatch({ type: types.QUIZ_SETUP_REQUEST });
    return axios
      .get(
        `https://opentdb.com/api.php?amount=${number_of_ques}&category=${cat}&difficulty=${difficulty_level}&type=multiple&encode=urlLegacy`
      )
      .then((res) => {
        dispatch({
          type: types.QUIZ_SETUP_SUCCESS,
          payload: res.data.results,
        });
      })
      .catch((e) => {
        dispatch({
          type: types.QUIZ_SETUP_FAILURE,
        });
      });
  };
