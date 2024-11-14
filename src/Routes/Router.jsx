import { createBrowserRouter, Navigate } from "react-router-dom"
import HomeLayout from "../Layout/HomeLayout"
import CategoryNews from "../Components/CategoryNews"


const Router = createBrowserRouter([
    {
        path:"/",
        element:<HomeLayout></HomeLayout>,
        children:[
            {
path:"/",
element:<Navigate to="/category/01"></Navigate>
            },
            {
                path:"/category/:id",
                element:<CategoryNews></CategoryNews>,
                loader:({params})=>fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)
            }
        ]
        
    },
    {
        path:"/news",
        element:<h1>News</h1>
    },
    {
        path:"/auth",
        element:<h1>Auth</h1>
    },
   
])
    

export default Router