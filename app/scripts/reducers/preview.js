import {preview as actions} from '../actions'

const defaultState = {
  name: '',
  content: null,
  type: '',
  stats: {}
}

export default function (state = defaultState, action) {
  switch (action.type) {
    case actions.requests.stat.SUCCESS:
      return {
        ...state,
        name: action.response.name,
        stats: action.response.stats
      }
    case actions.requests.read.SUCCESS:
      return {
        ...state,
        content: action.response
      }
    case actions.clear:
      return {
        ...defaultState
      }
    default:
      return state
  }
}
