export interface IRepo {
    id: number;
    title: string;
    body: string;
    stargazers_count: number;
    forks_count: number;
    name: string;
    html_url: string;
}
  
export interface IAction {
  type: string;
}

export interface IReposAction extends IAction {
    payload: IRepo[];
    page?: number;
    itemsPerPage?: number;
  }