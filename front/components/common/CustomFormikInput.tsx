import React from "react";
import { FastField, FastFieldProps } from "formik";

import { Box, Theme, styled, BoxProps, alpha } from "@mui/material";
import { SystemStyleObject } from "@mui/system/styleFunctionSx/styleFunctionSx";

const root = {
  position: "relative",
  width: "100%",
} as SystemStyleObject<Theme>;

const StyledIconWrapper = styled(Box, {
  shouldForwardProp: prop => prop !== "isError",
})<BoxProps & { isError?: boolean }>(({ theme, isError }) => ({
  position: "absolute",
  top: 0,
  width: "48px",
  height: "48px",
  color: isError ? theme.palette.error.main : theme.palette.divider,
  textAlign: "center",
  lineHeight: "55px",
  fontSize: 19,
  backgroundColor: isError ? alpha(theme.palette.error.main, 0.2) : theme.palette.background.default,
  border: isError ? `2px solid ${theme.palette.error.main}` : `2px solid ${theme.palette.divider}`,
  borderRadius: "4px 0 0 4px",
}));

const StyledFastField = styled(FastField, {
  shouldForwardProp: prop => prop !== "isError",
})<FastFieldProps & { isError?: boolean }>(({ theme, isError }) => ({
  padding: "0 20px 0 65px",
  margin: "0 0 24px 0",
  height: "48px",
  width: "100%",
  outline: "none",
  fontSize: 16,
  color: theme.palette.text.primary,
  backgroundColor: theme.palette.common.white,
  borderRadius: "4px",
  border: isError ? `2px solid ${theme.palette.error.main}` : `2px solid ${theme.palette.divider}`,
  boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.05)",
}));

interface Props extends Partial<HTMLInputElement> {
  error: boolean;
  icon: JSX.Element;
}

const CustomFormikInput: React.FC<Props> = ({ error, icon, ...rest }) => (
  <Box sx={root}>
    <StyledIconWrapper isError={error}>{icon}</StyledIconWrapper>
    <StyledFastField {...rest} isError={error} />
  </Box>
);

export default CustomFormikInput;
