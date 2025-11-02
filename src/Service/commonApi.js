import axios from "axios";

const commonAPI = async (httpMethod, url, reqBody) => {
  const reqConfig = {
    method: httpMethod,
    url,
    data: reqBody,
  };

  try {
    const response = await axios(reqConfig);
    return response;
  } catch (error) {
    return error;
  }
};

export default commonAPI;
