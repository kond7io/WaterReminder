import {AsyncStatus} from './AsyncStatus';

export const createAsyncConst = (type: string, asyncStatus: string) =>
  `${type}_${asyncStatus}`;

export const createAsyncConsts = (type: string) => ({
  pending: createAsyncConst(type, AsyncStatus.pending),
  resolved: createAsyncConst(type, AsyncStatus.resolved),
  rejected: createAsyncConst(type, AsyncStatus.rejected),
});
