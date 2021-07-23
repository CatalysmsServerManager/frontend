class HttpService {
  public get(path: string): Promise<Response> {
    return fetch(`${process.env.REACT_APP_API}${path}`, {
      method: 'GET',
      credentials: 'include',
    });
  }

  public post(path: string, data?: any): Promise<Response> {
    return fetch(`${process.env.REACT_APP_API}${path}`, {
      method: 'POST',
      headers: new Headers({ 'Content-Type': 'application/json' }),
      body: JSON.stringify(data),
      credentials: 'include'
    });
  }

  public delete(path: string): Promise<Response> {
    return fetch(`${process.env.REACT_APP_API}${path}`, {
      method: 'DELETE',
      credentials: 'include',
    });
  };
}

export const httpService = new HttpService();
