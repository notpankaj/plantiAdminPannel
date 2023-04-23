import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import "./App.css";
import Body from "./components/Body Section/Body";
import Sidebar from "./components/SideBar Section/Sidebar";
import MyOrders from "./pages/MyOrders/MyOrders";

const bodyRouter = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Body />} />
      <Route path="orders" element={<MyOrders />} />
    </>
  )
);

function App() {
  return (
    <div className="container">
      <Sidebar />
      <RouterProvider router={bodyRouter} />
    </div>
  );
}

export default App;
