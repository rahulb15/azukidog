import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_BASE_URL;

//asunc and typescript
const register = async (body: any) => {
  // return await axios.post(API_URL + "user/register", body).then((response) => {
  //   return response;
  // });
  try {
    const response = await axios.post(API_URL + "user/register", body);
    console.log(response, "response");
    return response;
  } catch (error) {
    console.error(error);
  }
};

const login = async (body: any) => {
  return await axios.post(API_URL + "login", body).then((response) => {
    if (response.data.accessToken) {
      localStorage.setItem("token", JSON.stringify(response.data));
    }
    return response.data;
  });
};

const forgotPassword = async (body: any) => {
  return await axios
    .post(API_URL + "forgot-password", body)
    .then((response) => {
      return response;
    });
};

const getUser = async (walletAddress: string) => {
  // return await axios
  //   .get(API_URL + `user/check-user/${walletAddress}`)
  //   .then((response) => {
  //     console.log(response, "response");
  //     return response;
  //   });
  // const response = await axios.get(API_URL + `user/check-user/${walletAddress}`);
  // console.log(response, "response");
  try {
    const response = await axios.get(
      API_URL + `user/check-user/${walletAddress}`,
    );
    console.log(response, "response");
    return response;
  } catch (error) {
    console.error(error);
  }
};

const logout = () => {
  localStorage.removeItem("token");
};

export default {
  register,
  login,
  forgotPassword,
  logout,
  getUser,
};
