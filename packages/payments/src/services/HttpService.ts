class HttpService {
  private getToken(): string | null {
    const jwt = window.localStorage.getItem('jwt');
    return jwt;
  }

  public get(path: string): Promise<Response> {
    return fetch(`/api${path}`, {
      method: 'GET',
      credentials: 'include',
      headers: new Headers({ 'Authorization': `Bearer ${this.getToken()}` })
    });
  }

  public post(path: string, data?: any): Promise<Response> {
    return fetch(`/api${path}`, {
      method: 'POST',
      headers: new Headers({ 'Content-Type': 'application/json', 'Authorization': `Bearer ${this.getToken()}` }),
      body: JSON.stringify(data)
    });
  }

  public delete(path: string): Promise<Response> {
    return fetch(`/api${path}`, {
      method: 'DELETE',
      credentials: 'include',
      headers: new Headers({ 'Authorization': `Bearer ${this.getToken()}` }),
    });
  };
}

export const httpService = new HttpService();
