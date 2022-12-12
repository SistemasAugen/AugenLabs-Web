import { Action } from "redux";

interface IAction extends Action {
  payload: any;
}

export type { IAction };
