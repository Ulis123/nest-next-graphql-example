import { styled } from "@mui/material/styles";
import { alpha, Dialog, DialogProps } from "@mui/material";

const StyledDialog = styled(Dialog)<DialogProps>(({ theme }) => ({
  "& .MuiDialog-container .MuiDialog-paper": { padding: "50px 35px" },
  "& .MuiBackdrop-root": { backgroundColor: alpha(theme.palette.common.black, 0.8) },
}));

export default StyledDialog;
