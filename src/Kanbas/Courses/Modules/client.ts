import axios from "axios";
const COURSES_API = "http://localhost:4000/api/courses";
export const createModule = async (courseId: any, module: any) => {
  const response = await axios.post(
    `${COURSES_API}/${courseId}/modules`,
    module
  );
  return response.data;
};
export const findModulesForCourse = async (courseId: any) => {
  const response = await axios
    .get(`${COURSES_API}/${courseId}/modules`);
  return response.data;
};
export const deleteModule = async (moduleId: string) => {
  const response = await axios
    .delete(`${MODULES_API}/${moduleId}`);
  return response.data;
};

export function updateModule(module: { name: string; description: string; course: string; _id: string; }) {
  throw new Error("Function not implemented.");
}

