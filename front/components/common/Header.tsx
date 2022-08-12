import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useApolloClient } from "@apollo/client";

import { useSnackbar } from "notistack";
import { AppBar, Avatar, Box, Button, Container, Divider, IconButton, Toolbar, Typography } from "@mui/material";
import { Menu, Done, Close, Login, PowerSettingsNew } from "@mui/icons-material";

import JoinIcon from "components/icons/JoinIcon";
import { StyledBadge } from "components/common";
import { appBar, burgerButton, divider, toolBar, flex } from "./headerStyles";
import { ME } from "graphql/gql/queries";
import { useMeQuery } from "graphql/__generated__/queries";
import { useLogOutMutation } from "graphql/__generated__/mutations";
import { AppRoutes, Dialogs } from "types";

interface HeaderProps {
  open?: boolean;
  setOpen?: (open: boolean) => {};
}

const Header: React.FC<HeaderProps> = ({ open, setOpen }) => {
  const { enqueueSnackbar } = useSnackbar();
  const router = useRouter();

  const client = useApolloClient();

  const { data } = useMeQuery();

  const [logOut] = useLogOutMutation({
    onCompleted: async ({ logOut: { result } }) => {
      if (result) {
        localStorage.removeItem("token");
        await client.writeQuery({ query: ME, data: { me: null } });
        // client.stop();
        // await client.resetStore();
        await router.replace(AppRoutes.HOME);
        enqueueSnackbar("You have been logged out", { variant: "info" });
      }
    },
    onError: error => enqueueSnackbar(error.message, { variant: "error" }),
  });

  const handleLogOut = async () => {
    await logOut();
  };

  return (
    <AppBar position="sticky" sx={appBar} color="inherit">
      <Container maxWidth="xl">
        <Toolbar sx={toolBar}>
          <Box sx={flex}>
            {setOpen && (
              <IconButton color="primary" edge="start" onClick={() => setOpen(!open)} sx={burgerButton}>
                <Menu />
              </IconButton>
            )}
            <Link href={AppRoutes.HOME} passHref>
              <Box component="a">
                <Image src="/images/logo-generic.png" width={160} height={60} alt="logo" />
              </Box>
            </Link>
            <Divider orientation="vertical" flexItem sx={divider} />
          </Box>

          <Box sx={flex}>
            {data?.me && (
              <>
                <StyledBadge
                  sx={{ mx: "10px" }}
                  overlap="circular"
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right",
                  }}
                  variant="dot"
                >
                  <Avatar alt="avatar" src={data.me.picture ?? ""} />
                </StyledBadge>
                <Box sx={{ mx: "10px" }}>
                  <Typography variant="body1" color="primary" sx={{ fontWeight: 700 }}>
                    {data.me.firstName ? `${data.me.firstName} ${data.me.lastName && data.me.lastName}` : data.me.email}
                  </Typography>
                  <Typography variant="body2" sx={flex} color={data.me.enabled ? "secondary" : "error"}>
                    {data.me.enabled ? (
                      <Done color="secondary" sx={{ fontSize: 19 }} />
                    ) : (
                      <Close color="error" sx={{ fontSize: 19 }} />
                    )}{" "}
                    {data.me.enabled ? "Active" : "Not verified"}
                  </Typography>
                </Box>

                <div>
                  <IconButton onClick={handleLogOut}>
                    <PowerSettingsNew />
                  </IconButton>
                </div>
              </>
            )}

            {!data?.me && (
              <>
                <Link href={{ pathname: AppRoutes.HOME, query: { modal: Dialogs.LOG_IN } }} passHref>
                  <Button href="" sx={{ ml: "16px" }} startIcon={<Login />}>
                    Log In
                  </Button>
                </Link>
                <Link href={{ pathname: AppRoutes.HOME, query: { modal: Dialogs.JOIN_US } }} passHref>
                  <Button href="" sx={{ ml: "16px" }} variant="contained" startIcon={<JoinIcon />}>
                    Join us
                  </Button>
                </Link>
              </>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
