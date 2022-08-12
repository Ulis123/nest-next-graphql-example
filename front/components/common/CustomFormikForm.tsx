import React from "react";
import { Form } from "formik";
import { styled } from "@mui/material";

const CustomFormikForm = styled(Form)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
}));

export default CustomFormikForm;
