import React, { forwardRef } from "react";
import { TransitionProps } from "@mui/material/transitions";
import { Zoom } from "@mui/material";

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Zoom ref={ref} {...props} />;
});

export default Transition;
