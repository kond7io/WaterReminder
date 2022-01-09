import {APPLY_COUNTER, GET_COUNTER} from '../../redux/Counter/Counter.action';

const INITIAL_STATE: any = {
  counter: null,
  loading: false,
  error: false,
};

export const CounterReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case APPLY_COUNTER.pending:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case APPLY_COUNTER.resolved:
      return {
        ...state,
        counter: action.waterCounter,
        loading: false,
        error: false,
      };
    case APPLY_COUNTER.rejected:
      return {
        ...state,
        loading: false,
        error: false,
      };
    case GET_COUNTER.pending:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case GET_COUNTER.resolved:
      return {
        ...state,
        counter: action.waterCounter,
        loading: false,
        error: false,
      };
    case GET_COUNTER.rejected:
      return {
        ...state,
        loading: false,
        error: false,
      };
    default:
      return state;
  }
};
