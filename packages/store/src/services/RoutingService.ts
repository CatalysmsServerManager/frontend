class RoutingService {
  navigateExternal(path: string, queryString?: Record<string, string>): void {
    if (queryString) {
      const searchParams = new URLSearchParams(window.location.search);
      for (const key in queryString) {
        if (Object.prototype.hasOwnProperty.call(queryString, key)) {
          searchParams.append(key, queryString[key]);
        }
      }
      window.location.href = `${process.env.REACT_APP_API}${path}?${searchParams.toString()}`;
      return;
    }
    window.location.href = `${process.env.REACT_APP_API}${path}`;
  }
}

export const routingService = new RoutingService();
