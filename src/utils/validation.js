import * as Yup from "yup";

export const Step1Schema = Yup.object().shape({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  gender: Yup.string().required("Gender is required"),
  dob: Yup.date().required("Date of birth is required"),
});

export const Step2Schema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),

  phone: Yup.string()
    .matches(/^[0-9]+$/, "Phone number must only contain digits")
    .min(10, "Phone number must be at least 10 digits")
    .max(13, "Phone number can be at most 13 digits")
    .required("Phone number is required"),

  city: Yup.string()
    .min(2, "City name is too short")
    .max(50, "City name is too long")
    .required("City is required"),

  address: Yup.string()
    .min(5, "Address is too short")
    .max(100, "Address is too long")
    .required("Address is required"),
});

export const Step3Schema = Yup.object().shape({
  username: Yup.string()
    .required("Username is required")
    .min(3, "Username must be at least 3 characters")
    .max(15, "Username cannot be longer than 15 characters")
    .matches(/^[a-zA-Z0-9]+$/, "Username can only contain letters and numbers"),

  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/[0-9]/, "Password must contain at least one number")
    .matches(
      /[!@#$%^&*(),.?":{}|<>]/,
      "Password must contain at least one special character"
    ),

  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
});
