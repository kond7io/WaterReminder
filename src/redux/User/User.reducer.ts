import {USER_LOGIN} from '../../redux/User/User.action';

const INITIAL_STATE: any = {
  user: undefined,
  loading: false,
  error: false,
};

export const UserReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case USER_LOGIN.pending:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case USER_LOGIN.resolved:
      return {
        ...state,
        user: action.userData,
        loading: false,
        error: false,
      };
    case USER_LOGIN.rejected:
      return {
        ...state,
        loading: false,
        error: false,
      };
    default:
      return state;
  }
};
