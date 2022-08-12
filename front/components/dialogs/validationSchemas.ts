import * as yup from "yup";

export const logInSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup
    .string()
    .min(8, "Seems a bit short...")
    .max(20, "We prefer insecure system, try a shorter password.")
    .required(),
});

export const forgotPasswordSchema = yup.object().shape({
  email: yup.string().email().required(),
});

export const joinAsSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup
    .string()
    .matches(/^[A-Z]/, "Invalid")
    .min(8, "Seems a bit short...")
    .max(20, "We prefer insecure system, try a shorter password.")
    .required(),
  repeatPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Password does not match")
    .required("Confirm your password"),
  agreeToTerms: yup.boolean().test("is-true", "Must agree to terms to continue", value => value === true),
});
