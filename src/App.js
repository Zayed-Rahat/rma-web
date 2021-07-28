import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import React, { useEffect } from "react";


import Home from './components/Home';
import ReadOurBlog from './components/news/readOurBlog/ReadOurBlog';
import MoreNews from './components/newsSingle/MoreNews';
import NewsSingle from './components/newsSingle/NewsSingle';
import Login from "./admin-pages/auth/Login";
import Register from "./admin-pages/auth/Register";
import RegisterComplete from "./admin-pages/auth/RegisterComplete";
import HomeAdmin from "./admin-pages/HomeAdmin";
import ForgotPassword from "./admin-pages/auth/ForgotPassword";
import AdminRoute from "./admin-pages/routes/AdminRoute";
import AdminDashboard from './admin-pages/admin/AdminDashboard'


import { auth } from "./firebase";
import { useDispatch } from "react-redux";
import { currentUser } from "./functions/auth";
import NewsCreate from "./admin-pages/admin/news/NewsCreate";
import NewsUpdate from "./admin-pages/admin/news/NewsUpdate";
import AllNews from "./admin-pages/admin/news/AllNews";
const App = () => {
  const dispatch = useDispatch();

  // to check firebase auth state
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const idTokenResult = await user.getIdTokenResult();
        console.log("user", user);

        currentUser(idTokenResult.token)
          .then((res) => {
            dispatch({
              type: "LOGGED_IN_USER",
              payload: {
                name: res.data.name,
                email: res.data.email,
                token: idTokenResult.token,
                role: res.data.role,
                _id: res.data._id,
              },
            });
          })
          .catch((err) => console.log(err));
      }
    });
    // cleanup
    return () => unsubscribe();
  }, [dispatch]);
  return (
    
    <>
    <ToastContainer />
<Router>
<Switch>

<Route  exact path="/">
    <Home />
  </Route>
    <Route path="/readOurBlog" exact component={ReadOurBlog}/>
    <Route path="/newssingle"  exact component={NewsSingle}/>
    <Route path="/newssingle/:id"  exact component={MoreNews}/>

    
    <Route exact path="/homeAdmin"  component={HomeAdmin}/>

     <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/register/complete" component={RegisterComplete} />
      <Route exact path="/forgot/password" component={ForgotPassword}/>
      <AdminRoute exact path="/admin/dashboard" component={AdminDashboard} />
      <AdminRoute exact path="/admin/news"  component={NewsCreate} />
      <AdminRoute exact path="/admin/allNews" component={AllNews} />
        <AdminRoute
          exact
          path="/admin/news/:slug"
          component={NewsUpdate}
        />
  </Switch>

</Router>
      
    </>
  );
}

export default App;
