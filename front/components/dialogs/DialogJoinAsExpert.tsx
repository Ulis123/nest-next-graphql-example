import { useRouter } from "next/router";
import { Formik, FormikHelpers } from "formik";
import { useApolloClient } from "@apollo/client";

import { useSnackbar } from "notistack";
import {
  Button,
  IconButton,
  Checkbox,
  FormControlLabel,
  useMediaQuery,
  Typography,
  useTheme,
  Divider,
} from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import CloseIcon from "@mui/icons-material/Close";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

import {
  CustomFormikInput,
  CustomFormikForm,
  StyledDialog,
  Transition,
  CustomNextLink as Link,
} from "components/common";
import { joinAsSchema } from "./validationSchemas";
import { useDialogState } from "hooks";
import { ICreateUserInput, useRegisterUserMutation } from "graphql/__generated__/mutations";
import { AppRoutes, Dialogs } from "types";
import { closeDialogBtn, dividerWithText, linkedInBtn } from "./dialogsStyles";

interface IFormikValues extends ICreateUserInput {
  repeatPassword: string;
  agreeToTerms: boolean;
}

const DialogJoinAsExpert = () => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("xs"));
  const router = useRouter();
  const { enqueueSnackbar } = useSnackbar();

  const [isJoinUs] = useDialogState(Dialogs.JOIN_US);

  const [signUp] = useRegisterUserMutation({
    onCompleted: async () => {
      enqueueSnackbar("Registration success", { variant: "success" });
      await router.push(AppRoutes.HOME);
    },
    onError: error => enqueueSnackbar(error.message, { variant: "error" }),
  });

  const handleClose = async () => {
    await router.push({ pathname: AppRoutes.HOME });
  };

  const handleSubmit = async (
    { email, password }: IFormikValues,
    { setSubmitting, resetForm }: FormikHelpers<IFormikValues>,
  ) => {
    try {
      await signUp({ variables: { createUserInput: { email, password } } });
      resetForm();
    } catch (e) {
      console.error(e);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <StyledDialog
      fullScreen={fullScreen}
      TransitionComponent={Transition}
      open={isJoinUs}
      onClose={handleClose}
      fullWidth
      maxWidth="sm"
    >
      <IconButton sx={closeDialogBtn} onClick={handleClose}>
        <CloseIcon />
      </IconButton>

      <Typography variant="h5" align="center" gutterBottom>
        Join as Expert
      </Typography>
      <Typography align="center" paragraph>
        Already have an account?{" "}
        <Link href={{ pathname: AppRoutes.HOME, query: { modal: Dialogs.LOG_IN } }}>Log In!</Link>
      </Typography>
      <Button variant="contained" sx={linkedInBtn} startIcon={<LinkedInIcon />} fullWidth>
        Register via LinkedIn
      </Button>

      <Divider sx={dividerWithText}>or</Divider>

      <Formik
        enableReinitialize
        initialValues={{ email: "", password: "", repeatPassword: "", agreeToTerms: false }}
        validationSchema={joinAsSchema}
        onSubmit={handleSubmit}
      >
        {({ values, errors, touched, handleChange, isSubmitting }) => (
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
              placeholder="Create Password"
              icon={<LockOutlinedIcon />}
              error={!!errors.password && !!touched.password}
            />
            <CustomFormikInput
              type="password"
              name="repeatPassword"
              placeholder="Repeat Password"
              icon={<LockOutlinedIcon />}
              error={!!errors.repeatPassword && !!touched.repeatPassword}
            />

            <Typography
              align="center"
              color={theme =>
                !!errors.password && !!touched.password ? theme.palette.error.main : theme.palette.text.primary
              }
            >
              Password must be minimum 8 and maximum 20 characters; the first character must be an alpha character.
            </Typography>

            <FormControlLabel
              control={<Checkbox />}
              name="agreeToTerms"
              value={values.agreeToTerms}
              onChange={handleChange}
              label={
                <Typography>
                  I agree <Link href={AppRoutes.HOME}>Terms & Conditions</Link>
                </Typography>
              }
            />
            {errors.agreeToTerms && touched.agreeToTerms && (
              <Typography color={theme => theme.palette.error.main} sx={{ m: "0 0 20px" }}>
                {errors.agreeToTerms}
              </Typography>
            )}

            <LoadingButton type="submit" variant="contained" color="primary" fullWidth loading={isSubmitting}>
              Join
            </LoadingButton>
          </CustomFormikForm>
        )}
      </Formik>
    </StyledDialog>
  );
};

export default DialogJoinAsExpert;
