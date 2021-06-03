class HttpService {
  public get(path: string): Promise<Response> {
    return fetch(`/api${path}`, { method: 'GET', credentials: 'include' });
  }
  public post(path: string, data?: any): Promise<Response> {
    return fetch(`/api${path}`, {
      method: 'POST',
      credentials: 'include',
      headers: new Headers({ 'Content-Type': 'application/json' }),
      body: JSON.stringify(data)
    });
  }

  public delete(path: string): Promise<Response> {
    return fetch(`/api${path}`, {
      method: 'DELETE',
      credentials: 'include',
    });
  };
}

export const httpService = new HttpService();
