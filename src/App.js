import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./AllPages/Shared/Navbar/Navbar";
import HomePage from "./AllPages/Home/HomePage/HomePage";
import Blogs from "./AllPages/Home/Blogs/Blogs";
import NotFoundPage from "./AllPages/Shared/NotFoundPage/NotFoundPage";
import SignUp from "./AllPages/Shared/LoginSignUp/SignUp/SignUp";
import Login from "./AllPages/Shared/LoginSignUp/Login/Login";
import AuthProvider from "./contexts/AuthProvider/AuthProvider";
import PrivateRoute from "./AllPages/Shared/PrivateRoute/PrivateRoute";
import AllShop from "./AllPages/Home/Shop/AllShop";
import SingleShop from "./AllPages/Home/SingleShop/SingleShop";
import MyOrders from "./AllPages/Dashboard/MyOrders/MyOrders";
// import PaymentDetails from "./AllPages/Dashboard/PaymentDetails/PaymentDetails";
import AddNewAdmin from "./AllPages/Dashboard/AddNewAdmin/AddNewAdmin";
import AllOrders from "./AllPages/Dashboard/AllOrders/AllOrders";
import ManageAllProducts from "./AllPages/Dashboard/ManageAllProducts/ManageAllProducts";
import AddNewProducts from "./AllPages/Dashboard/AddNewProducts/AddNewProducts";
import GiveReview from "./AllPages/Dashboard/GiveReview/GiveReview";


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
            <Navbar />
            <Switch>
              <Route exact path="/">
                <HomePage />
              </Route>
              <Route path="/home">
                <HomePage />
              </Route>
              <Route path="/shops">
                <AllShop />
              </Route>
              <PrivateRoute path="/singleshop/:pdId">
                <SingleShop />
              </PrivateRoute>
              <Route path="/blogs">
                <Blogs />
              </Route>
              <PrivateRoute path="/myorders">
                <MyOrders />
              </PrivateRoute>
              <PrivateRoute path="/givereview">
                <GiveReview />
              </PrivateRoute>
              <PrivateRoute path="/addproducts">
                <AddNewProducts />
              </PrivateRoute>
              <PrivateRoute path="/manageallproducts">
                <ManageAllProducts />
              </PrivateRoute>
              <PrivateRoute path="/allorders">
                <AllOrders />
              </PrivateRoute>
              <PrivateRoute path="/addnewadmin">
                <AddNewAdmin />
              </PrivateRoute>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/signup">
                <SignUp />
              </Route>
              <Route path="*">
                <NotFoundPage />
              </Route>
            </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;


//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