import React, { useEffect, useState } from "react";
import axios from "axios";
function WorkingWithObjects() {
  const ASSIGNMENT_URL = "http://localhost:4000/a5/assignment";
  const [assignment, setAssignment] = useState({ title: "" });

  const fetchAssignment = async (p0: { title: string; }) => {
    const response = await axios.get(`${ASSIGNMENT_URL}`);
    fetchAssignment({
      title: ""
    }); // Fix: Pass an empty object as an argument
  };

  const updateTitle = async () => {
    const response = await axios
      .get(`${ASSIGNMENT_URL}/title/${assignment.title}`);
    fetchAssignment({ title: "" }); // Fix: Pass an empty object as an argument
  };

  useEffect(() => {
    fetchAssignment({ title: "" }); // Fix: Pass an empty object as an argument
  }, []);
  <input onChange={(e) => fetchAssignment({
        ...assignment, title: e.target.value })} 
      value={assignment.title} type="text" />
}
