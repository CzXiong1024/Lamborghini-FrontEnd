import axios from "axios";
import { loginFailure, loginStart, loginSuccess } from "./AuthActions";

export const login = async (user, dispatch) => {
  dispatch(loginStart());
  try {
    const res = await axios.post('https://infsci2560-final-lambo-server.glitch.me/api/auth/login', user);
    res.data.isAdmin && dispatch(loginSuccess(res.data));
    dispatch(loginSuccess(res.data));
  } catch (error) {
    dispatch(loginFailure());
  }
}