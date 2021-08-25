export function tokenHeaderMiddleware() {
  // return authorization header with jwt token
  const user = JSON.stringify(localStorage.getItem('MyToken'));

  if (user && user.token) {
    return { Authorization: `Bearer ${user.token}` };
  }
  return {};
}
