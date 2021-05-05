import axios from 'axios';

export default class Auth {
  static isAuthenticated() {
    let userData = localStorage.getItem('userData');
    if (!userData) return false;

    userData = JSON.parse(userData);
    axios.defaults.headers.common.Authorization = `Bearer ${userData.token}`;

    return userData;
  }

  static logIn(email, password) {
    return new Promise((resolve, reject) => {
      axios
        .post('/login', { email, password })
        .then((response) => {
          let logo;
          const { token, id, email, name } = response.data;
          localStorage.setItem(
            'userData',
            JSON.stringify({ id, name, email, token })
          );

          axios.defaults.headers.common.Authorization = `Bearer ${token}`;

          resolve(true);
        })
        .catch((err) => {
          localStorage.removeItem('userData');
          resolve(false);
        });
    });
  }

  static logOut(ignoreBackendTokens) {
    if (!ignoreBackendTokens) axios.post('/logout');
    localStorage.removeItem('userData');
    localStorage.clear();
    axios.defaults.headers.common.Authorization = null;
  }
}
