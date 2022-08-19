import './AddPortfolio.css';
import Layout from '../../layout/Layout';
import * as Yup from "yup";
import { useHistory } from "react-router-dom";
import { useState, useRef } from 'react';
import { useFormik } from "formik";
import PreviewImg from '../../components/PreviewImg';
import axios from 'axios';

const formValidationSchema = Yup.object({
    title: Yup.string().required("  Portfolio title is required"),
    description: Yup.string().required("  Portfolio description is required"),
    publication: Yup.string().required("  Portfolio publication is required"),
    category: Yup.string().required("  Portfolio category is required"),
    img: Yup.string().required("  Portfolio img is required"),
    demolink: Yup.string().required("  Portfolio demo link is required"),
    githublink: Yup.string().required("  Portfolio github link is required"),
  });

function AddPortfolio() {
    const [file, setFile] = useState();
    const fileRef = useRef(null);

    const { handleSubmit, handleChange, values, handleBlur, errors, touched, setFieldValue } =
    useFormik({
      initialValues: {
        title: "",
        description: "",
        publication: "",
        category: "",
        photo: "",
        demolink: "",
        githublink: ""
      },
      onSubmit: async (values) => {
        console.log("onSubmit", values);
        // try {
        //     const url = "http://localhost:5000/api/upload";
        //     await axios.post(url, {
        //         file: values.file,
        //         name: values.img
        //     });
        // } catch (err) {
        //     console.log(err);
        // }
        
      }  
    });


  return (
    <Layout>
        <div className='page AddPortfolioPg'>
            <h2 className='addPortfolioFormHeadline'> ADD PORTFOLIO </h2>
            <form className="addPortfolioForm" onSubmit={handleSubmit} encType="multipart/form-data">
                
                <div className="formGroup">
                    <input
                        placeholder="Portfolio title"
                        type="text"
                        className="title"
                        name="title"
                        value={values.title}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                </div>
                <div className="formGroup">
                    <input
                        placeholder="Portfolio Photo URL"
                        type="text"
                        className="photo"
                        name="photo"
                        value={values.photo}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                </div>
                <div className="formGroup">
                    <textarea
                        placeholder="Portfolio description"
                        type="text"
                        className="description"
                        name="description"
                        value={values.description}
                  onChange={handleChange}
                  onBlur={handleBlur}
                    />
                </div>
                <div className="columns2">
                    <div className="formGroup">
                        <input
                            placeholder="Add publication"
                            type="text"
                            className="publication"
                            name="publication"
                            value={values.publication}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    </div>
                    <div className="formGroup">
                        <input
                            placeholder="Add category"
                            type="text"
                            className="category"
                            name="category"
                            value={values.category}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    </div>
                </div>
                <div className='columns2'>
                    <div className="formGroup">
                        <input
                            placeholder="Demo Link"
                            type="text"
                            className="demolink"
                            name="demolink"
                            value={values.demolink}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    </div>
                    <div className="formGroup">
                        <input
                            placeholder="Github Link"
                            type="text"
                            className="githublink"
                            name="githublink"
                            value={values.githublink}
                  onChange={handleChange}
                  onBlur={handleBlur}
                        />
                    </div>
                </div>
                <button className='submit' type="submit">Add portfolio</button>
            </form>
        </div>
    </Layout>
  )
}

export default AddPortfolio