export enum Screens {
  SignIn = 'sign-in-screen',
  Panel = 'Panel',
}

export type ParamList = {
  //auth
  [Screens.SignIn]: undefined;
  //app
  [Screens.Panel]: undefined;
};
