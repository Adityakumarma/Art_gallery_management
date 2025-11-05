import commonAPI from "./commonApi";
import BASEURL from "./serviceURL";

// Register new user
export const registerUserAPI = async (reqBody) => {
  return await commonAPI("POST", `${BASEURL}/users`, reqBody);
};

// Login user
export const loginUserAPI = async (username, password, role) => {
  return await commonAPI(
    "GET",
    `${BASEURL}/users?username=${username}&password=${password}&role=${role}`
  );
};
