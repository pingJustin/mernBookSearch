// use this to decode a token and get the user's information out of it
import decode from "jwt-decode";

// create a new class to instantiate for a user
class AuthService {
  // get user data
  getProfile() {
    try {
      return decode(this.getToken());
    } catch (err) {
      console.error("Error decoding token:", err);
      return null;
    }
  }

  // check if user's logged in
  loggedIn() {
    // Checks if there is a saved token and it's still valid
    const token = this.getToken();
    return !!token && !this.isTokenExpired(token);
  }

  // check if token is expired
  isTokenExpired(token) {
    try {
      const decoded = decode(token);
      if (decoded.exp < Date.now() / 1000) {
        // Token is expired - remove it
        this.logout();
        return true;
      }
      return false;
    } catch (err) {
      // Invalid token format - remove it
      this.logout();
      return true;
    }
  }

  getToken() {
    // Retrieves the user token from localStorage
    return localStorage.getItem("id_token");
  }

  login(idToken) {
    if (!idToken) return false;
    try {
      // Verify token is valid format before saving
      decode(idToken);
      // Saves user token to localStorage
      localStorage.setItem("id_token", idToken);
      window.location.assign("/");
      return true;
    } catch (err) {
      console.error("Invalid token format:", err);
      return false;
    }
  }

  logout() {
    // Clear user token and profile data from localStorage
    localStorage.removeItem("id_token");
    // this will reload the page and reset the state of the application
    window.location.assign("/");
  }
}

export default new AuthService();
