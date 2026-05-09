import { createBrowserRouter } from "react-router";
import RootLayouts from "../Layouts/RootLayouts";
import DashboardLayouts from "../Layouts/DashboardLayouts";
import Home from "../Pages/Home/Home";
import Blogs from "../Pages/Blogs/Blogs";
import BlogDetails from "../Pages/BlogDetails/BlogDetails";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import Login from "../Pages/Login/Login";
import Singup from "../Pages/Singup/Singup";
import AdminDashboard from "../Pages/AdminDashboard/AdminDashboard/AdminDashboard";
import AddBlog from "../Pages/AdminDashboard/AddBlog/AddBlog";
import UpdateBlog from "../Pages/AdminDashboard/UpdateBlog/UpdateBlog";
import ManageBlogs from "../Pages/AdminDashboard/ManageBlogs/ManageBlogs";
import AllUsers from "../Pages/AdminDashboard/AllUsers/AllUsers";



export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayouts />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/blogs",
                element: <Blogs />
            },
            {
                path: "/blogDetails/:id",
                element: <BlogDetails />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/singup",
                element: <Singup />
            },
        ]
    },
    {
        path: "/",
        element: <DashboardLayouts />,
        children: [
            {
                path: "dashboard",
                element: <AdminDashboard />
            },
            {
                path: "dashboard/addBlog",
                element: <AddBlog />,
            },
            {
                path: "dashboard/updateBlog/:id",
                element: <UpdateBlog />,
            },
            {
                path: "dashboard/manageBlogs",
                element: <ManageBlogs />,
            },
            {
                path: "dashboard/all-users",
                element: <AllUsers />,
            },
        ]
    }
])