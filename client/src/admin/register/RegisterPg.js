import './RegisterPg.css';
import Layout from '../../layout/Layout';
import * as Yup from "yup";
import { useHistory } from "react-router-dom";
import { useFormik } from "formik";
import axios from 'axios';
import { toast } from "react-toastify";

const formValidationSchema = Yup.object({
    fName: Yup.string().required("  First name is required"),
    lName: Yup.string().required("  Last name is required"),
    email: Yup.string().required("  email is required"),
    password: Yup.string().required("  Password title is required"),
});

function RegisterPg() {
  const { handleSubmit, handleChange, values, handleBlur, errors, touched } =
    useFormik({
      initialValues: {
        fName: "",
        lName: "",
        email: "",
        password: "",
      },
      validationSchema: formValidationSchema,
      onSubmit: async (values) => {
        
        console.log("onSubmit", values);

        const url = "http://localhost:5000/api/register";
        const postdata =  await axios.post(url, {
            "fname": values.fName,
            "lname": values.lName,
            "email": values.email,
            "password": values.email
        }).then(res => toast.success("Registered"))
          .catch(error => toast.error(error.message))
        
      }
    });

    

  return (
    <div className='verticalAlignCenter box-shadow'>
    <h2 className='addPortfolioFormHeadline'> Register </h2>
    <form className="addPortfolioForm" onSubmit={(e) => { e.preventDefault(); handleSubmit()}}>
      <div className='columns2'>
        <div className="formGroup">
            <input
                placeholder="First name"
                type="text"
                className="fName"
                onChange={handleChange}
                onBlur={handleBlur}
                name="fName"
                value={values.fName}
            />
            {errors.fName && touched.fName
                  ? errors.fName
                  : ""}
        </div>
        <div className="formGroup">
            <input
                placeholder="Last name"
                type="text"
                className="lName"
                name="lName"
                value={values.lName}
                onChange={handleChange}
                onBlur={handleBlur}
            />
            {errors.lName && touched.lName
                  ? errors.lName
                  : ""}
        </div>
      </div>
      <div className='columns2'>
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
      </div>
                    
                <button className='submit' type="submit">Register</button>
        </form>
    </div>
  )
}

export default RegisterPg