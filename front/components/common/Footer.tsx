import React from "react";

import { Typography, List, ListItemButton, ListItemText, Grid, Theme, Container } from "@mui/material";
import { styled } from "@mui/material/styles";
import { SystemStyleObject } from "@mui/system/styleFunctionSx/styleFunctionSx";

const listItemText = { display: "flex", justifyContent: "center" } as SystemStyleObject<Theme>;

const StyledFooter = styled("footer")<FooterProps>(({ theme, dashboard }) => ({
  padding: "10px 42px",
  boxShadow: dashboard ? "none" : "0 0 18px 0 rgba(0, 0, 0, 0.12)",
  borderTop: `1px solid ${theme.palette.divider}`,
  backgroundColor: dashboard ? "transparent" : theme.palette.common.white,
}));

interface FooterProps {
  dashboard?: boolean;
}

const Footer: React.FC<FooterProps> = props => {
  return (
    <StyledFooter {...props}>
      <Container>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item xs={12} md={5}>
            <Typography sx={{ textAlign: ["center", "left"] }} variant="subtitle2" component="p" color="text.secondary">
              All rights reserved
            </Typography>
          </Grid>
          <Grid item xs={12} md={5} lg={4}>
            <List dense sx={{ display: { xs: "inherit", sm: "flex" } }}>
              <ListItemButton disableGutters>
                <ListItemText primary="Privacy" disableTypography sx={listItemText} />
              </ListItemButton>
              <ListItemButton disableGutters>
                <ListItemText primary="Help" disableTypography sx={listItemText} />
              </ListItemButton>
              <ListItemButton disableGutters>
                <ListItemText primary="About" disableTypography sx={listItemText} />
              </ListItemButton>
              <ListItemButton disableGutters>
                <ListItemText primary="Contact" disableTypography sx={listItemText} />
              </ListItemButton>
            </List>
          </Grid>
        </Grid>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
