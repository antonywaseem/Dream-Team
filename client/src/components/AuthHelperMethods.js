import decode from "jwt-decode";

export default class AuthHelperMethods {
  // Initializing important variables
  constructor(domain) {
    //THIS LINE IS ONLY USED WHEN YOU'RE IN PRODUCTION MODE!
    this.domain = domain || "http://localhost:5000"; // API server domain
  }
  login = (email, password) => {
    // Get a token from api server using the fetch api
    return this.fetch(`/api/login`, {
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: password
      })
    })
      .then(res => res.json())
      .then(json => {
        this.setToken(json.token); // Setting the token in localStorage
        console.log(json.token);
        return Promise.resolve(json);
      });
  };

  loggedIn = () => {
    // Checks if there is a saved token and it's still valid
    const token = this.getToken(); // Getting token from localstorage
    return !!token && !this.isTokenExpired(token); // handwaiving here
  };

  isTokenExpired = token => {
    try {
      const decoded = decode(token);
      if (decoded.exp < Date.now() / 1000) {
        // Checking if token is expired.
        return true;
      } else return false;
    } catch (err) {
      console.log("expired check failed! Line 42: AuthService.js");
      return false;
    }
  };

  setToken = idToken => {
    // Saves user token to localStorage
    localStorage.setItem("id_token", idToken);
  };

  getToken = () => {
    // Retrieves the user token from localStorage
    return localStorage.getItem("id_token");
  };

  logout = () => {
    // Clear user token and profile data from localStorage
    localStorage.removeItem("id_token");
  };

  getConfirm = () => {
    // Using jwt-decode npm package to decode the token
    let answer = decode(this.getToken());
    console.log("Recieved answer!");
    return answer;
  };

  fetch = (url, options) => {
    // performs api calls sending the required authentication headers
    const headers = {
      "Content-Type": "application/json"
    };
    if (this.loggedIn()) {
      headers["Authorization"] = "Bearer " + this.getToken();
    }

    return fetch(url, {
      headers,
      ...options
    }).then(this._checkStatus);
  };

  _checkStatus = response => {
    if (response.status >= 200 && response.status < 300) {
      return response;
    }
  };
}
