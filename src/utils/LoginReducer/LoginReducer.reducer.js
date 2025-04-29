export const INITIAL_LOGIN_STATE = {
  valueName: false,
  valueLevel: false,
  valueAvatar: false,
  page: 0
}

export const reducerLoginData = (state, action) => {
  switch (action.type) {
    case 'CHANGE_NAME':
      return { ...state, valueName: !state.valueName }

    case 'CHANGE_LEVEL':
      return { ...state, valueLevel: !state.valueLevel }

    case 'CHANGE_AVATAR':
      return { ...state, valueAvatar: !state.valueAvatar }

    default:
      return state
  }
}
