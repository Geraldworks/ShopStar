import { TSignInSchema } from "@/types/auth";
import axios, { isAxiosError } from "axios";
const baseUrl = import.meta.env.VITE_BACKEND_URL + "/login";

type TokenResponse = {
  token: string;
};

const login = async (userPayload: TSignInSchema) => {
  try {
    const webtoken = await axios.post<TokenResponse>(baseUrl, userPayload);
    return webtoken.data.token;
  } catch (err: unknown) {
    if (isAxiosError(err)) {
      throw new Error(err.response?.data.message || "An unknown error occurred");
    } else {
      throw new Error("Network or Server error");
    }
  }
};

const jwtAuth = async (token: string) => {
  try {
    await axios.post(
      `${baseUrl}/jwt`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );
  } catch (err: unknown) {
    if (isAxiosError(err)) {
      throw new Error(err.response?.data.message);
    }
  }
};

export default { login, jwtAuth };
