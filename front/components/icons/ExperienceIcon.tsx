import React from "react";
import { SvgIcon, SvgIconProps } from "@mui/material";

const ExperienceIcon: React.FC<SvgIconProps> = ({ color = "inherit", ...props }) => {
  return (
    <SvgIcon viewBox="0 0 14 13" color={color} {...props}>
      <path d="M2.19238 2.99512H0.932617V11.7549C0.932617 12.0967 1.05469 12.3896 1.29883 12.6338C1.54297 12.8779 1.84082 13 2.19238 13H10.9375V11.7549H2.19238V2.99512ZM12.1826 0.504883H4.68262C4.34082 0.504883 4.04785 0.626953 3.80371 0.871094C3.55957 1.11523 3.4375 1.4082 3.4375 1.75V9.25C3.4375 9.5918 3.55957 9.88477 3.80371 10.1289C4.04785 10.373 4.34082 10.4951 4.68262 10.4951H12.1826C12.5342 10.4951 12.832 10.373 13.0762 10.1289C13.3203 9.88477 13.4424 9.5918 13.4424 9.25V1.75C13.4424 1.4082 13.3203 1.11523 13.0762 0.871094C12.832 0.626953 12.5342 0.504883 12.1826 0.504883ZM12.1826 9.25H4.68262V1.75H12.1826V9.25ZM5.94238 4.87012H10.9375V6.12988H5.94238V4.87012ZM5.94238 6.74512H8.43262V8.00488H5.94238V6.74512ZM5.94238 2.99512H10.9375V4.25488H5.94238V2.99512Z" />
    </SvgIcon>
  );
};

export default ExperienceIcon;
