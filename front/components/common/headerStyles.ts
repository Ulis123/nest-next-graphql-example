import { SystemStyleObject } from "@mui/system/styleFunctionSx/styleFunctionSx";
import { Theme } from "@mui/material";

export const appBar = {
  boxShadow: "0 0 18px 0 rgba(0, 0, 0, 0.12)",
  zIndex: theme => theme.zIndex.drawer + 1,
} as SystemStyleObject<Theme>;

export const toolBar = {
  justifyContent: "space-between",
} as SystemStyleObject<Theme>;

export const burgerButton = {
  marginRight: theme => theme.spacing(2),
  position: "absolute",
  left: 20,
  top: 20,
  display: { xs: null, sm: "none" },
} as SystemStyleObject<Theme>;

export const divider = {
  m: "0 34px",
  backgroundColor: "divider",
  display: { xs: "none", md: "flex" },
} as SystemStyleObject<Theme>;

export const flex = {
  display: "flex",
  alignItems: "center",
} as SystemStyleObject<Theme>;
