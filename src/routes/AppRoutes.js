import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import { Login } from "../pages/Auth/Login";
import { Register } from "../pages/Auth/Register";
import { Branch } from "../pages/Branch/Branch";
import { Computer } from "../pages/Branch/Computer";
import { Student } from "../pages/Dashboard/Student";
import { Teacher } from "../pages/Dashboard/Teacher";
import { Admin } from "../pages/Dashboard/Admin";
import { TeacherManagement } from "../pages/Dashboard/components/TeacherManagement";
import { StudentManagement } from "../pages/Dashboard/components/StudentManagement";
import { StudentDetails } from '../pages/Dashboard/components/StudentDetails'; // Adjust path based on your file structure
import { QuestionForm } from "../pages/Dashboard/components/QuestionForm";
import { PageNotFound } from "../pages/PageNotFound";




export const AppRoutes = () => {
    return (
        <>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/branches" element={<Branch/>}/>
            <Route path="/exam" element={<Student/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path ="/computer-science" element={<Computer/>}/>
            {/* <Route path ="/student-dashboard" element={<Student/>}/> */}
            <Route path="/teacher-dashboard" element={<Teacher/>}/>
            <Route path = "/admin-dashboard" element={<Admin/>}/>
            <Route path ="/teacher" element={<TeacherManagement/>}/>
            <Route path ="/students" element={<StudentManagement/>}/>
            <Route path ="/students/:id" element={<StudentDetails/>}/>
            <Route path ="/addquestion" element={<QuestionForm/>}/>
            <Route path='*' element= { <PageNotFound/>} />
            </Routes>
        </>
    )
}