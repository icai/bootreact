export const list = (actionType) => {
  return (state, {
    type,
    payload
  }) => {
    switch (type) {
      case actionType:
        return {
          ...state,
          loading: false,
          list: payload
        }
      break;
      default:
        return state
    }
  }
}
