import { useRouter } from "next/router";

import { Formik, FormikHelpers } from "formik";

import { useSnackbar } from "notistack";
import { Button, Divider, Typography } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

import { CustomFormikInput, CustomFormikForm, CustomNextLink as Link } from "components/common";
import { logInSchema } from "./validationSchemas";
import { dividerWithText, linkedInBtn } from "./dialogsStyles";
import { ME } from "graphql/gql/queries";
import { ILogInMutationVariables, useLogInMutation } from "graphql/__generated__/mutations";
import { AppRoutes, Dialogs } from "types";

const LogInLayout = () => {
  const { enqueueSnackbar } = useSnackbar();
  const router = useRouter();

  const [logIn] = useLogInMutation({
    onCompleted: async data => {
      // localStorage.setItem("token", data.login.token);
      enqueueSnackbar("Sign in Success", { variant: "success" });
      await router.push(AppRoutes.HOME);
    },
    onError: error => enqueueSnackbar(error.message, { variant: "error" }),
  });

  const handleSubmit = async (
    { email, password }: ILogInMutationVariables,
    { setSubmitting, resetForm }: FormikHelpers<ILogInMutationVariables>,
  ) => {
    try {
      await logIn({ variables: { email, password }, refetchQueries: [{ query: ME }] });
      resetForm();
    } catch (e) {
      console.error(e);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Typography variant="h5" align="center" gutterBottom>
        We&apos;re glad to see you again!
      </Typography>
      <Typography align="center" paragraph>
        Don&apos;t have an account?{" "}
        <Link href={{ pathname: AppRoutes.HOME, query: { modal: Dialogs.JOIN_US } }}>Sign Up!</Link>
      </Typography>
      <Button variant="contained" sx={linkedInBtn} startIcon={<LinkedInIcon />} fullWidth>
        Sign in via LinkedIn
      </Button>

      <Divider sx={dividerWithText}>or</Divider>

      <Formik
        enableReinitialize
        initialValues={{ email: "user@gmail.com", password: "12345678" } as ILogInMutationVariables}
        validationSchema={logInSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched, isSubmitting }) => (
          <CustomFormikForm>
            <CustomFormikInput
              type="email"
              name="email"
              placeholder="Email Address"
              icon={<MailOutlineIcon />}
              error={!!errors.email && !!touched.email}
            />
            <CustomFormikInput
              type="password"
              name="password"
              placeholder="Password"
              icon={<LockOutlinedIcon />}
              error={!!errors.password && !!touched.password}
            />
            <LoadingButton type="submit" variant="contained" color="primary" fullWidth loading={isSubmitting}>
              Log In
            </LoadingButton>
          </CustomFormikForm>
        )}
      </Formik>
      <Link
        href={{ pathname: AppRoutes.HOME, query: { modal: Dialogs.FORGOT_PASSWORD } }}
        sx={{ marginTop: "20px", textAlign: "center" }}
      >
        Forgot Password?
      </Link>
    </>
  );
};

export default LogInLayout;
