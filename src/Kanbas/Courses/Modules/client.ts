import axios from "axios";
const COURSES_API = "http://localhost:4000/api/courses";
export const createModule = async (courseId, module) => {
  const response = await axios.post(
    `${COURSES_API}/${courseId}/modules`,
    module
  );
  return response.data;
};
export const findModulesForCourse = async (courseId) => {...};