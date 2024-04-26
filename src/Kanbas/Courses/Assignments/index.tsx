import React from "react";
import { FaCheckCircle, FaEllipsisV, FaPlusCircle } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import assignments from "../Database";
import  courses  from "../Database";

function Assignments() {
    const { courseId } = useParams();
    //const assignmentList = assignments.filter((assignment: { course_id: any; }) => assignment.course_id === courseId);

    return (
        <> <div><h2>Assignments</h2></div>
            <div className="flex-grow-0 me-2 d-none d-lg-block">
                <input type="text" placeholder="Search for Assignments" />
                <button className="btn btn-secondary">+Group <i className="fa fa-times"></i></button>
                <button className="btn btn-fail">...Assignment <i className="fa fa-check"></i></button>
            </div>
            <ul className="list-group wd-modules">
                <li className="list-group-item">
                    <div>
                        <FaEllipsisV className="me-2" /> ASSIGNMENTS
                        <span className="float-end">
                            <FaCheckCircle className="text-success" />
                            <FaPlusCircle className="ms-2" />
                            <FaEllipsisV className="ms-2" />
                        </span>
                        (40% of Total)
                    </div>
                    <ul className="list-group">
                        {/* {assignmentList.map((assignment: { _id: any; title: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; due_date: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; points: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }) => (
                            <>
                                <li className="list-group-item">
                                    <FaEllipsisV className="me-2" />
                                    <Link to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}>
                                        {assignment.title}
                                    </Link>
                                    <span className="float-end">
                                        <FaCheckCircle className="text-success" />
                                        <FaEllipsisV className="ms-2" />
                                    </span>
                                </li>
                                <div className="list-group-item" style={{ color: "orange" }}>Multiple Modules | Due: {assignment.due_date} | {assignment.points}</div>
                            </>
                        ))} */}
                    </ul>
                </li>
            </ul>
        </>
    );
}

export default Assignments;