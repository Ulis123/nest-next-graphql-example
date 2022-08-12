import React from "react";
import { useRouter } from "next/router";
import { useSnackbar } from "notistack";
import { Formik, FormikHelpers } from "formik";

import { Typography } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

import { useMutation } from "@apollo/client";
// import { PASSWORD_RESET } from "graphql/mutations";
import { forgotPasswordSchema } from "./validationSchemas";

import { CustomFormikInput, CustomFormikForm } from "components/common";
import { AppRoutes } from "types";

interface IValues {
  email: string;
}

const ForgotPasswordLayout = () => {
  const { enqueueSnackbar } = useSnackbar();
  const router = useRouter();

  // const [resetPassword] = useMutation(PASSWORD_RESET, {
  //   onCompleted: () => enqueueSnackbar("Reset password success", { variant: "success" }),
  //   onError: error => enqueueSnackbar(error.message, { variant: "error" }),
  // });

  const handleSubmit = async (values: IValues, { setSubmitting }: FormikHelpers<IValues>) => {
    const { email } = values;
    try {
      // await resetPassword({ variables: { email } });
      await router.push(AppRoutes.HOME);
    } catch (e) {
      console.error(e);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Typography variant="h5" align="center" gutterBottom>
        Forgot Password?
      </Typography>

      <Typography align="center" paragraph>
        Lorem ipsum dolor sit amet
      </Typography>

      <Formik
        enableReinitialize
        initialValues={{ email: "" }}
        validationSchema={forgotPasswordSchema}
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
            <LoadingButton type="submit" variant="contained" color="primary" fullWidth loading={isSubmitting}>
              Resend Password
            </LoadingButton>
          </CustomFormikForm>
        )}
      </Formik>
    </>
  );
};

export default ForgotPasswordLayout;
