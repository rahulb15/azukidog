import axios from "axios";

const API_AUTH_URL = process.env.NEXT_PUBLIC_BASE_URL + "/auth/";
const API_URL = process.env.NEXT_PUBLIC_BASE_URL;

//asunc and typescript
const register = async (body: any) => {
  return await axios.post(API_AUTH_URL + "register", body).then((response) => {
    // if (response.data.accessToken) {
    //   localStorage.setItem("token", JSON.stringify(response.data));
    // }
    return response;
  }
  );
}

const login = async (body: any) => {
  return await axios.post(API_AUTH_URL + "login", body).then((response) => {
    if (response.data.accessToken) {
      localStorage.setItem("token", JSON.stringify(response.data));
    }
    return response.data;
  }
  );
}

const forgotPassword = async (body: any) => {
  return await axios.post(API_AUTH_URL + "forgot-password", body).then((response) => {
    return response;
  }
  );
}



const logout = () => {
  localStorage.removeItem("token");
};

export default {
  register,
  login,
  forgotPassword,
  logout,
};
