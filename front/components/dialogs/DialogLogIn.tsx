import React from "react";
import { useRouter } from "next/router";

import { IconButton, useMediaQuery, useTheme } from "@mui/material";
import { Close } from "@mui/icons-material";

import { StyledDialog, Transition } from "components/common";
import LogInLayout from "components/dialogs/LogInLayout";
import ForgotPasswordLayout from "components/dialogs/ForgotPasswordLayout";
import { closeDialogBtn } from "components/dialogs/dialogsStyles";
import { useDialogState } from "hooks";
import { AppRoutes, Dialogs } from "types";

const DialogLogIn: React.FC = () => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("xs"));

  const router = useRouter();

  const [isLogIn] = useDialogState(Dialogs.LOG_IN);
  const [isForgotPass] = useDialogState(Dialogs.FORGOT_PASSWORD);

  const handleClose = async () => {
    await router.push({ pathname: AppRoutes.HOME });
  };

  return (
    <StyledDialog
      open={isLogIn || isForgotPass}
      onClose={handleClose}
      fullWidth
      fullScreen={fullScreen}
      maxWidth="sm"
      TransitionComponent={Transition}
    >
      <IconButton sx={closeDialogBtn} onClick={handleClose}>
        <Close />
      </IconButton>
      {isLogIn && <LogInLayout />}
      {isForgotPass && <ForgotPasswordLayout />}
    </StyledDialog>
  );
};

export default DialogLogIn;
