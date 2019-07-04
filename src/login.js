export const userService = {
  login,
  logout,
};

function login(username, password) {
  const requestOptions = {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'text/plain' },
      body: JSON.stringify({ username, password })
  };

  return fetch(`http://127.0.0.1:3000/login`, requestOptions)
  .then(response => {
    if (response.ok) {
      response.json().then(json => {
        return json;
        
      });
    }
  });
}

function logout() {
  // remove user from local storage to log user out
  sessionStorage.removeItem('user');
}


