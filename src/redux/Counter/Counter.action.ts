import {createAsyncConsts} from '../../redux/async/createAsyncConsts';

export const HANDLE_APPLY_COUNTER = 'HANDLE_APPLY_COUNTER';
export const applyCounterAction = () => {
  return {
    type: HANDLE_APPLY_COUNTER,
  };
};

export const APPLY_COUNTER = createAsyncConsts('APPLY_COUNTER');
export const applyCounterPending = () => {
  return {
    type: APPLY_COUNTER.pending,
  };
};

export const applyCounterResolved = () => {
  return {
    type: APPLY_COUNTER.resolved,
  };
};

export const applyCounterRejected = () => {
  return {
    type: APPLY_COUNTER.rejected,
  };
};

export const HANDLE_GET_COUNTER = 'HANDLE_GET_COUNTER';
export const getCounterAction = () => {
  return {
    type: HANDLE_GET_COUNTER,
  };
};

export const GET_COUNTER = createAsyncConsts('GET_COUNTER');
export const getCounterPending = () => {
  return {
    type: GET_COUNTER.pending,
  };
};

export const getCounterResolved = (glassCounter: number) => {
  debugger;
  return {
    type: GET_COUNTER.resolved,
    glassCounter,
  };
};

export const getCounterRejected = () => {
  return {
    type: GET_COUNTER.rejected,
  };
};
