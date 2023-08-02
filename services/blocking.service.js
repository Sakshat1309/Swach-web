import axios from "axios";

const API_URL = "https://kavach-1-e4682497.deta.app/";

export const getBlockedList = () => {
  const response = axios.get(API_URL + "get_blocked_urls", {
    // forcefully add cookie
    withCredentials: true,
    headers: {
      Cookie: "deta_app_token=I20SDrox5aOqdujbEDAdfTOqIDqRWmD1vALy9ghxWJKPafq1",
    },
  });
  console.log(response);
  return response;
};

export const addBlockedUrl = (url) => {
  return axios.post(API_URL + "add_blocked_url", { url });
};
