import { NonSensitiveUser } from "@/types/login";
import { TSignUpSchema } from "@/types/login";
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

export default { createUser };
