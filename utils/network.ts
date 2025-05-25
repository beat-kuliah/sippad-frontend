const baseUrl = "http://sippad-api.beatfraps.com";

export const authUrl = {
  login: `${baseUrl}/auth/login`,
  register: `${baseUrl}/auth/register`,
};

export const userUrl = {
  me: baseUrl + "/users" + "/me",
  updateUsername: baseUrl + "/users" + "/name",
};

export const accountUrl = {
  list: baseUrl + "/account",
  add: baseUrl + "/account" + "/create",
  transfer: baseUrl + "/account" + "/transfer",
  addMoney: baseUrl + "/account" + "/add-money",
};
