import { NonSensitiveUser } from "@/types/auth";
import { TSignUpSchema } from "@/types/auth";
import axios, { isAxiosError } from "axios";

const baseUrl = import.meta.env.VITE_BACKEND_URL + "/users";

const createUser = async (userPayload: TSignUpSchema) => {
  try {
    const createdUser = await axios.post<NonSensitiveUser>(baseUrl, userPayload);
    return createdUser.data;
  } catch (err: unknown) {
    if (isAxiosError(err)) {
      throw new Error(err.response?.data.message || "An unknown error occurred");
    } else {
      throw new Error("Network or server error");
    }
  }
};

const getUser = async () => {
  try {
    const token = window.localStorage.getItem("shopstar-token");
    const loggedInUserPayload = await axios.get<NonSensitiveUser>(baseUrl, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return loggedInUserPayload.data;
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.log(err.message);
    }
  }
};

export default { createUser, getUser };
