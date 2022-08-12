import { SystemStyleObject } from "@mui/system/styleFunctionSx/styleFunctionSx";
import { Theme } from "@mui/material";

import { colors } from "config/globals";

export const closeDialogBtn = {
  position: "absolute",
  top: 5,
  right: 5,
} as SystemStyleObject<Theme>;

export const dividerWithText = {
  my: "35px",
} as SystemStyleObject<Theme>;

export const linkedInBtn = {
  bgcolor: colors.linkedInColor,
  "&:hover": { bgcolor: colors.linkedInColor },
} as SystemStyleObject<Theme>;
