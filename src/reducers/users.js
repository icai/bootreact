import {
  list, composeReducer
} from './base'


const reducer = (state, {
  type,
  payload
}) => {

  // 其他逻辑
}

export default composeReducer(reducer, list('users/FETCH_SUCCESS'))
