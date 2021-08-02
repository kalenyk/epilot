export interface IUser {
    id?: number;
    public_repos?: number;
    login?: string;
}
  
export interface IAction {
  type: string;
  user?: string;
  payload?: IUser;
}