// import { sendMessage } from './actions';
// import { AppThunk } from 'store';

export function exampleAPI() {
  return Promise.resolve('Async Chat Bot');
}

// export const thunkSendMessage = (message: string): AppThunk => async (
//   dispatch,
// ) => {
//   const asyncResp = await exampleAPI();
//   dispatch(
//     sendMessage({
//       message,
//       user: asyncResp,
//       timestamp: new Date().getTime(),
//     }),
//   );
// };
