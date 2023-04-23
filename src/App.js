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

export const Layout = ({ children }) => {
  return (
    <div className="container">
      <Sidebar />
      {children}
    </div>
  );
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        path="/"
        element={
          <Layout>
            <Body />
          </Layout>
        }
      />
      <Route
        path="orders"
        element={
          <Layout>
            <MyOrders />
          </Layout>
        }
      />
    </>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
