import * as yup from "yup";

export const contactUsSchema = yup.object({
    name: yup
    .string()
    .min(2, "Too Short!")
    .max(21, "Too Long!")
    .required("Please enter name")
    .matches(/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/, "Invalid name"),
    email: yup
    .string()
    .email()
    .required("Please enter email")
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Invalid email"
    ),
    subject: yup
    .string()
    .required("Please enter subject"),
    message: yup.string()
  });