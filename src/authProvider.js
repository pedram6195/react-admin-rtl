import axios from "axios";

const authProvider = {
  // called when the user attempts to log in
  login: ({ username, password }) => {
    return axios({
      method: "post",
      url: "https://api.shelfup.ir/api/v1/auth/login",
      data: { username: username.replace("0", "+98"), password }
    })
      .then(res => {
        const { access_token, refresh_token } = res.data.data;
        localStorage.setItem("username", username);
        localStorage.setItem("access_token", access_token);
        localStorage.setItem("refresh_token", refresh_token);
      })
      .catch(err => {
        throw new Error(`کدخطا: ${err.response.status}`);
      });
  },
  // called when the user clicks on the logout button
  logout: () => {
    localStorage.removeItem("username");
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    return Promise.resolve();
  },
  // called when the API returns an error
  checkError: ({ status }) => {
    if (status === 401 || status === 403) {
      localStorage.removeItem("username");
      return Promise.reject();
    }
    return Promise.resolve();
  },
  // called when the user navigates to a new location, to check for authentication
  checkAuth: () => {
    return localStorage.getItem("username")
      ? Promise.resolve()
      : Promise.reject();
  },
  // called when the user navigates to a new location, to check for permissions / roles
  getPermissions: () => Promise.resolve()
};

export default authProvider;
