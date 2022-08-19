import './LoginPg.css';
import * as Yup from "yup";
import { useHistory } from "react-router-dom";
import { useContext } from 'react';
import { useFormik } from "formik";
import axios from 'axios';
import { toast } from "react-toastify";
import Cookies from "js-cookie";

import AuthContext from "../../context/AuthContextProvider";


const formValidationSchema = Yup.object({
    email: Yup.string().required("  email is required"),
    password: Yup.string().required("  Password title is required"),
});

function LoginPg() {
  const history = useHistory();
  const { loggedIn, setLoggedIn } = useContext(AuthContext);
  const { handleSubmit, handleChange, values, handleBlur, errors, touched } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      onSubmit: async (values) => {
        console.log("onSubmit", values);
        const url = "http://localhost:5000/api/login";
        axios.defaults.withCredentials = true;
        const postdata =  await axios.post(url, {
            "email": values.email,
            "password": values.password
        }).then(res => {
          console.log(res.data.token);
          setLoggedIn(true)
          Cookies.set("token", res.data.token);
          toast.success("loggedin")
          history.push("/")
        })
          .catch(error => toast.error(error.message)) 
      }
    });

    

  return (
    <div className='verticalAlignCenter box-shadow'>
    <h2 className='addPortfolioFormHeadline'> Login </h2>
    <form className="addPortfolioForm" onSubmit={handleSubmit}>
        <div className="formGroup">
            <input
                placeholder="Email"
                type="text"
                className="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
            />
            {errors.email && touched.email
                  ? errors.email
                  : ""}
        </div>
        <div className="formGroup">
            <input
                placeholder="Password"
                type="password"
                className="password"
                name="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
            />
            {errors.password && touched.password
                  ? errors.password
                  : ""}
        </div>
                    
                <button className='submit' type="submit">Login</button>
        </form>
    </div>
  )
}

export default LoginPg