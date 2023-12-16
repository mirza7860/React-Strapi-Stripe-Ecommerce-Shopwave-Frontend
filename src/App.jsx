import { 
  createBrowserRouter, 
  RouterProvider ,
  Outlet} from "react-router-dom";
import Home from './pages/Home/Home';
import Produt from "./pages/Product/Product.jsx";
import Products from "./pages/Products/Products.jsx";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import ProductsNA from "./pages/ProductsNA/ProductsNA"

const Layout=()=>{
  return(
   <div className="app">
     <Navbar />
     <Outlet />
     <Footer />
  </div>
  )
}


const router = createBrowserRouter([
  {
    path: "https://shopwave-ecommerce.onrender.com/",
    element: <Layout />,
    children: [
      {
        path:'/',
        element:<Home />
      },
      {
        path: "/product/:id",
        element: <Produt />,
      },
      {
        path: "/products/:id",
        element: <Products />,
      },
      {
        path:"/products/na",
        element:<ProductsNA />,
      },
      {
        path:"/?success=true",
        element:<Home />,
      },
      {
        path:"/?success=false",
        element:<Home />,
      },
       {
        path:"/*",
        element:<Home />,
      }
    ],
  },
]);



const App = () => {
   return (
     <div>
       <RouterProvider router={router} />
     </div>
   );
};

export default App;





