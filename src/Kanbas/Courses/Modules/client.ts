import axios from "axios";
export const BASE_API = process.env.REACT_APP_BASE_API_URL;
export const USERS_API = process.env.REACT_APP_API_URL;
export interface User {
  _id: string;
  username: string;
  password: string;
  role: string;
  firstName: string;
  lastName: string;
}
const request = axios.create({
        withCredentials: true,
    });
export const signup = async (user: any) => {
  const response = await request.post(`${USERS_API}/signup`, user);
  return response.data;
};

export const signin = async (credentials: User) => {
  const response = await request.post(`${USERS_API}/signin`, credentials);
  return response.data;
};
export const updateUser = async (user: any) => {
  const response = await request.put(`${USERS_API}/${user._id}`, user);
  return response.data;
};
export const createUser = async (user: any) => {
  const response = await request.post(`${USERS_API}`, user);
  return response.data;
};
export const deleteUser = async (userId: any) => {
  const response = await request.delete(`${USERS_API}/${userId}`);
  return response.data;
};
export const findUserById = async (id: string) => {
  const response = await request.get(`${USERS_API}/${id}`);
  return response.data;
};
export const signout = async () => {
  const response = await request.post(`${USERS_API}/signout`);
  return response.data;
};
export const findModulesForCourse = async (courseId: string | undefined) => {
    const response = await axios
      .get(`${COURSES_API}/${courseId}/modules`);
    return response.data;
  };

export function updateModule(module: { name: string; description: string; course: string; _id: string; }) {
  throw new Error("Function not implemented.");
}
  