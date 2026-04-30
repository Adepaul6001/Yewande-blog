import{
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from "react-router-dom";
import MainLayout from "./Layout/MainLayout";
import HomePage from "./Pages/HomePage";
import Blog from "./Pages/Blog";

const router = (createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout/>}>
         <Route index element={<HomePage/>}/>
         <Route path="/Blog" element={<Blog/>}/>  
      </Route>
    )
));

const App = () => {
  return <RouterProvider router={router}/>
};




export default App;