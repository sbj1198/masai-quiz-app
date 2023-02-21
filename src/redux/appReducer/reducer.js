import * as types from "./actionTypes";

const initialState = {
  isLoading: false,
  isError: false,
  questions: [],
  correct_ans: 0,
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.QUIZ_SETUP_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case types.QUIZ_SETUP_SUCCESS:
      return {
        ...state,
        isLoading: false,
        questions: payload,
      };
    case types.QUIZ_SETUP_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        questions: [],
      };
    case types.QUIZ_OPTION_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case types.QUIZ_OPTION_SUCCESS:
      return {
        ...state,
        isLoading: false,
        correct_ans: payload,
      };
    case types.QUIZ_OPTION_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        correct_ans: 0,
      };
    default:
      return state;
  }
};
