import { Fab, useScrollTrigger, Slide, FabProps } from "@mui/material";
import { styled } from "@mui/material/styles";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const StyledFab = styled(Fab)<FabProps>(({ theme }) => ({
  position: "fixed",
  bottom: 75,
  right: 30,
  borderRadius: theme.spacing(1),
}));

const ScrollTop = () => {
  const trigger = useScrollTrigger({
    target: typeof window !== "undefined" ? window : undefined,
    disableHysteresis: true,
    threshold: 250,
  });

  const handleClick = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <Slide direction="up" in={trigger}>
      <StyledFab color="primary" size="medium" onClick={handleClick}>
        <KeyboardArrowUpIcon />
      </StyledFab>
    </Slide>
  );
};

export default ScrollTop;
