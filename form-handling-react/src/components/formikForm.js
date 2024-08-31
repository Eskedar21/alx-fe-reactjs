import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const FormikForm= () => {
  // Define the validation schema using Yup
  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    email: Yup.string().required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  // Initial form values
  const initialValues = {
    username: "",
    email: "",
    password: "",
  };

  // Function to handle form submission
  const handleSubmit = (values, { resetForm }) => {
    console.log("Form data:", values);
    resetForm(); // Reset the form after submission
  };

  return (
    <div className="app">
      <h1>Registration Form</h1>
      {/* Formik setup */}
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form className="signup_form" style={{ display: "flex", flexDirection: "column", gap: "15px", width: "300px" }}>
            <div>
              <label htmlFor="username">Username</label>
              <Field type="text" name="username" />
              <ErrorMessage name="username" component="div" style={{ color: "red" }} />
            </div>

            <div>
              <label htmlFor="email">Email</label>
              <Field type="email" name="email" />
              <ErrorMessage name="email" component="div" style={{ color: "red" }} />
            </div>

            <div>
              <label htmlFor="password">Password</label>
              <Field type="password" name="password" />
              <ErrorMessage name="password" component="div" style={{ color: "red" }} />
            </div>

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormikForm;
