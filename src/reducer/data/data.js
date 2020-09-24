const initialState = {
  title: 'Hello World!',
};

const ActionTypes = {
  SET_TITLE: 'SET_TITLE',
  RESET_TITLE: 'RESET_TITLE',
};

const ActionCreators = {
  setTitle: title => ({
    type: ActionTypes.SET_TITLE,
    payload: title,
  }),

  resetTitle: () => ({
    type: ActionTypes.RESET_TITLE,
  }),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_TITLE:
      return {
        title: action.payload,
      };

    case ActionTypes.RESET_TITLE:
      return {
        title: 'Hello World!',
      };

    default:
      return state;
  }
};

// Пример реализации ассинхронных экшенов
// const Operation = {
//   loadTitle: () => (dispatch, getState, api) => {
//     api.get('some-root').then(response => {
//       const { data } = response.data;
//       dispatch(ActionCreators.setTitle(data));
//     });
//   },
// };

export {
  reducer as dataReducer,
  ActionCreators as DataActionCreators,
  ActionTypes as DataActionTypes,
  // Operation as DataOperation,
};
