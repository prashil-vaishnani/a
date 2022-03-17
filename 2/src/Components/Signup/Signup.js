import React, { useRef } from "react";
import "./Signup.css";
import womanIcon from "../../Images/woman_icon.png";
import { useDispatch } from "react-redux";
import { auth } from "../../redux/store";
import { useFormik } from "formik";

// function for validation
const validate = (values) => {
  const errors = {};

  if (!values.profilePic) {
    errors.profilePic = "Please Upload Profile Photo!";
  } else if (values.profilePic.size > 2000000) {
    errors.profilePic = "Image must be less than 2Mb!";
  }

  if (!values.name) {
    errors.name = "Required!";
  } else if (values.name.length > 15) {
    errors.name = "Must be 15 characters or less!";
  }

  if (!values.email) {
    errors.email = "Required!";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address!";
  }

  if (!values.phoneNo) {
    errors.phoneNo = "Required!";
  } else if (
    !/^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[56789]\d{9}$/gm.test(
      values.phoneNo
    )
  ) {
    errors.phoneNo = "Invalid Phone No!";
  }

  if (!values.password) {
    errors.password = "Password is Required!";
  } else if (values.password.length < 8) {
    errors.password = "Password length must be atleast 8 characters!";
  } else if (values.password.length > 15) {
    errors.password = "Password length must not exceed 15 characters!";
  } else if (!values.confirmPassword) {
    errors.confirmPassword = "Confirm Your Password First!";
  } else if (values.password !== values.confirmPassword) {
    errors.confirmPassword = "Password Not Match!";
  }

  return errors;
};

// component function
export const Signup = () => {
  const dispatch = useDispatch();
  const fileRef = useRef();
  const formik = useFormik({
    initialValues: {
      profilePic: null,
      name: "",
      email: "",
      phoneNo: "",
      password: "",
      confirmPassword: "",
    },
    validate,
    onSubmit: (values) => {
      dispatch(
        auth.login({
          profilePic: URL.createObjectURL(values.profilePic),
          name: values.name,
          email: values.email,
          phoneNo: values.phoneNo,
          password: values.password,
        })
      );
      fileRef.current.value = "";
      formik.resetForm();
    },
  });
  return (
    <section className="signupSection">
      <div className="container mainWrapper">
        <div className="formWrapper">
          <form className="signUpForm" onSubmit={formik.handleSubmit}>
            <h1>SignUp</h1>
            {/* Image Input */}
            <div className="chooseImgWrapper">
              <input
                type="file"
                name="profilePic"
                accept=".jpg, .png"
                className="customImgInput"
                ref={fileRef}
                onChange={(event) => {
                  formik.setFieldValue(
                    "profilePic",
                    event.currentTarget.files[0]
                  );
                }}
                onBlur={formik.handleBlur}
              />
              {formik.touched.profilePic && formik.errors.profilePic ? (
                <div className="errorsWrapper">{formik.errors.profilePic}</div>
              ) : null}
            </div>
            {/* UserName Input */}
            <div className="labelInputWrapper">
              <label htmlFor="userName">Name</label>
              <input
                type="text"
                id="userName"
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={
                  formik.touched.name && formik.errors.name
                    ? "formInput errorFormInput"
                    : "formInput"
                }
              />
              {formik.touched.name && formik.errors.name ? (
                <div className="errorsWrapper">{formik.errors.name}</div>
              ) : null}
            </div>
            {/* Email Input */}
            <div className="labelInputWrapper">
              <label htmlFor="userEmail">Email</label>
              <input
                type="email"
                id="userEmail"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={
                  formik.touched.email && formik.errors.email
                    ? "formInput errorFormInput"
                    : "formInput"
                }
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="errorsWrapper">{formik.errors.email}</div>
              ) : null}
            </div>
            {/* PhoneNo Input */}
            <div className="labelInputWrapper">
              <label htmlFor="userPhoneNo">PhoneNo</label>
              <input
                type="text"
                id="userPhoneNo"
                name="phoneNo"
                value={formik.values.phoneNo}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={
                  formik.touched.phoneNo && formik.errors.phoneNo
                    ? "formInput errorFormInput"
                    : "formInput"
                }
              />
              {formik.touched.phoneNo && formik.errors.phoneNo ? (
                <div className="errorsWrapper">{formik.errors.phoneNo}</div>
              ) : null}
            </div>
            {/* Password Input */}
            <div className="labelInputWrapper">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={
                  formik.touched.password && formik.errors.password
                    ? "formInput errorFormInput"
                    : "formInput"
                }
              />
              {formik.touched.password && formik.errors.password ? (
                <div className="errorsWrapper">{formik.errors.password}</div>
              ) : null}
            </div>
            {/* Confirm Password Input */}
            <div className="labelInputWrapper">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formik.values.confirmPassword}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={
                  formik.touched.confirmPassword &&
                  formik.errors.confirmPassword
                    ? "formInput errorFormInput"
                    : "formInput"
                }
              />
              {formik.touched.confirmPassword &&
              formik.errors.confirmPassword ? (
                <div className="errorsWrapper">
                  {formik.errors.confirmPassword}
                </div>
              ) : null}
            </div>
            <div className="btnWrapper">
              <input type="submit" className="formBtn submitBtn" />
              <input
                type="reset"
                className="formBtn resetBtn"
                onClick={() => {
                  fileRef.current.value = "";
                  formik.resetForm();
                }}
                disabled={!formik.dirty || formik.isSubmitting}
              />
            </div>
          </form>
        </div>
        <div className="imageWrapper">
          <img src={womanIcon} alt="woman_icon" />
        </div>
      </div>
    </section>
  );
};
