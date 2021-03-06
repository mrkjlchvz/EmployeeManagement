import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER
} from '../actions/types';

const initialState = {
  email: '',
  password: '',
  error: '',
  loading: false,
  user: null
}

const AuthReducer = (state = initialState, action) => {
  switch(action.type) {
    case EMAIL_CHANGED:
      return { ...state, email: action.payload };

    case PASSWORD_CHANGED:
      return { ...state, password: action.payload };

    case LOGIN_USER_SUCCESS:
      return { ...state, ...initialState }

    case LOGIN_USER_FAIL:
      return { ...state, password: '', loading: false, error: 'Authentication failed' }

    case LOGIN_USER:
      return { ...state, error: '', loading: true }

    default:
      return state;
  }
}

export default AuthReducer;
